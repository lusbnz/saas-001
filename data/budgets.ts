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
    {
        value: "all_income",
        label: "All income",
    },
    {
        value: "salary",
        label: "Salary",
    },
    {
        value: "saving",
        label: "Saving",
    },
    {
        value: "investment",
        label: "Investment",
    },
    {
        value: "credit_card",
        label: "Credit card",
    },
    {
        value: "car",
        label: "Car",
    },
    {
        value: "groceries",
        label: "Groceries",
    },
    {
        value: "bills",
        label: "Bills",
    },
    {
        value: "taxes",
        label: "Taxes",
    },
    {
        value: "entertainment",
        label: "Entertainment",
    },
    {
        value: "health",
        label: "Health",
    },
    {
        value: "others",
        label: "Others",
    }
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

export const reports = [
    {
        value: "spending",
        label: "Spending",
    },
    {
        value: "net_worth",
        label: "Net Worth",
    },
    {
        value: "incomes_expenses",
        label: "Incomes & Expenses",
    }
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

export const accountData = [
    { account: '12345', date: '2024-08-01', owner: 'John Doe', category: 'Salary', description: 'Monthly salary', outflow: 0, inflow: 3000 },
    { account: '67890', date: '2024-08-02', owner: 'Jane Smith', category: 'Groceries', description: 'Weekly groceries', outflow: 150, inflow: 0 },
    { account: '11223', date: '2024-08-03', owner: 'Alice Johnson', category: 'Gas', description: 'Car fuel', outflow: 60, inflow: 0 },
    { account: '44556', date: '2024-08-04', owner: 'Michael Brown', category: 'Dining Out', description: 'Dinner with friends', outflow: 80, inflow: 0 },
    { account: '77889', date: '2024-08-05', owner: 'Emily Davis', category: 'Backup', description: 'Emergency savings', outflow: 200, inflow: 0 },
    { account: '99000', date: '2024-08-06', owner: 'Sarah Wilson', category: 'Personal Loans', description: 'Loan repayment', outflow: 300, inflow: 0 },
    { account: '12346', date: '2024-08-07', owner: 'David Lee', category: 'Rent House', description: 'Monthly rent', outflow: 1200, inflow: 0 },
    { account: '67891', date: '2024-08-08', owner: 'Laura Clark', category: 'Groceries', description: 'Weekly groceries', outflow: 155, inflow: 0 },
    { account: '11224', date: '2024-08-09', owner: 'James Turner', category: 'Gas', description: 'Car fuel', outflow: 65, inflow: 0 },
    { account: '44557', date: '2024-08-10', owner: 'Olivia Walker', category: 'Dining Out', description: 'Lunch with colleagues', outflow: 90, inflow: 0 },
    { account: '77890', date: '2024-08-11', owner: 'William Scott', category: 'Backup', description: 'Emergency fund', outflow: 210, inflow: 0 },
    { account: '99001', date: '2024-08-12', owner: 'Sophia Lewis', category: 'Personal Loans', description: 'Loan repayment', outflow: 310, inflow: 0 },
];