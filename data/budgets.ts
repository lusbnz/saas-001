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
    const categories = ["Food", "Transportation", "Shopping", "Entertainment", "Health", "Others"];
    return categories.map((category: string) => {
        const totalActivity = parseFloat(getRandomValue(500));
        const totalAvailable = parseFloat(getRandomValue(500));
        const totalAssigned = (totalActivity + totalAvailable).toFixed(2);

        const subItemsCount = 3;
        let subActivitySum = 0;
        let subAvailableSum = 0;

        const items = Array.from({ length: subItemsCount }, (_, index) => {
            let subActivity, subAvailable;

            if (index === subItemsCount - 1) {
                subActivity = totalActivity - subActivitySum;
                subAvailable = totalAvailable - subAvailableSum;
            } else {
                subActivity = parseFloat(getRandomValue(totalActivity - subActivitySum));
                subAvailable = parseFloat(getRandomValue(totalAvailable - subAvailableSum));
            }

            subActivitySum += subActivity;
            subAvailableSum += subAvailable;

            const subAssigned = (subActivity + subAvailable).toFixed(2);

            return {
                subCategory: `${category} Item ${index + 1}`,
                assigned: `$${subAssigned}`,
                activity: `$${subActivity.toFixed(2)}`,
                available: `$${subAvailable.toFixed(2)}`
            };
        });

        return {
            category,
            assigned: `$${totalAssigned}`,
            activity: `$${totalActivity.toFixed(2)}`,
            available: `$${totalAvailable.toFixed(2)}`,
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
