export type Budget = (typeof budgets)[number]
export type Tab = (typeof tabs)[number]

export type TableCategory = "all" | "underfunded" | "overfunded" | "available" | "snoozed";

export interface BudgetItem {
    category: string;
    assigned: string;
    activity: string;
    available: string;
    items?: SubItem[];
  }
  
export interface SubItem {
    subCategory: string;
    assigned: string;
    activity: string;
    available: string;
  }

export type TableData = {
    [key in TableCategory]: BudgetItem[];
};

export const budgets = [
    "All income",
    "Salary",
    "Saving",
    "Investment",
    "Credit card",
    "Car",
    "Groceries",
    "Bills",
    "Taxes",
    "Entertainment",
    "Health",
    "Others",
]

export const tabs = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "underfunded",
        label: "Underfunded",
    },
    {
        value: "overfunded",
        label: "Overfunded",
    },
    {
        value: "available",
        label: "Available",
    },
    {
        value: "snoozed",
        label: "Snoozed",
    },
]

function getRandomValue(max: number) {
    return (Math.random() * max).toFixed(2);
}

function createBudgetData() {
    const categories = {
        Bills: ["Rent House", "Personal Loans"],
        Needs: ["Backup", "Groceries", "Gas"],
        Wants: ["Dining Out", "Dating"]
    };

    return Object.entries(categories).map(([category, subcategories]) => {
        const totalAssigned = parseFloat(getRandomValue(1000));
        const totalActivity = parseFloat(getRandomValue(totalAssigned));
        const totalAvailable = (totalAssigned - totalActivity).toFixed(2);

        let subAssignedSum = 0;
        let subActivitySum = 0;

        const items = subcategories.map((subCategory, index) => {
            let subAssigned, subActivity;

            if (index === subcategories.length - 1) {
                subAssigned = totalAssigned - subAssignedSum;
                subActivity = totalActivity - subActivitySum;
            } else {
                subAssigned = parseFloat(getRandomValue(totalAssigned - subAssignedSum));
                subActivity = parseFloat(getRandomValue(subAssigned));
            }

            subAssignedSum += subAssigned;
            subActivitySum += subActivity;

            const subAvailable = (subAssigned - subActivity).toFixed(2);

            return {
                subCategory,
                assigned: `$ ${subAssigned.toFixed(2)}`,
                activity: `$ ${subActivity.toFixed(2)}`,
                available: `$ ${subAvailable}`
            };
        });

        return {
            category,
            assigned: `$ ${totalAssigned.toFixed(2)}`,
            activity: `$ ${totalActivity.toFixed(2)}`,
            available: `$ ${totalAvailable}`,
            items
        };
    });
}

export const tableData: TableData = {
    all: createBudgetData(),
    underfunded: createBudgetData(),
    overfunded: createBudgetData(),
    available: createBudgetData(),
    snoozed: createBudgetData(),
};
