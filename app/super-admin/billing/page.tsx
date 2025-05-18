import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Download,
  DollarSign,
  CreditCard,
  TrendingUp,
  Users,
  Calendar,
  BarChart,
  PieChart,
  FileText,
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample transactions data
const transactions = [
  {
    id: "TRX-001234",
    user: "john.doe@example.com",
    amount: 99.99,
    description: "Monthly Subscription - Premium Plan",
    status: "Completed",
    date: "2023-05-20",
    paymentMethod: "Credit Card",
  },
  {
    id: "TRX-001235",
    user: "jane.smith@example.com",
    amount: 499.99,
    description: "Annual Subscription - Business Plan",
    status: "Completed",
    date: "2023-05-19",
    paymentMethod: "PayPal",
  },
  {
    id: "TRX-001236",
    user: "robert.johnson@example.com",
    amount: 49.99,
    description: "Monthly Subscription - Basic Plan",
    status: "Completed",
    date: "2023-05-18",
    paymentMethod: "Credit Card",
  },
  {
    id: "TRX-001237",
    user: "emily.davis@example.com",
    amount: 99.99,
    description: "Monthly Subscription - Premium Plan",
    status: "Failed",
    date: "2023-05-20",
    paymentMethod: "Credit Card",
  },
  {
    id: "TRX-001238",
    user: "michael.wilson@example.com",
    amount: 199.99,
    description: "Course Purchase - AI Prompting Mastery",
    status: "Completed",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
  },
]

// Sample invoices data
const invoices = [
  {
    id: "INV-001234",
    user: "john.doe@example.com",
    amount: 99.99,
    description: "Monthly Subscription - Premium Plan",
    status: "Paid",
    date: "2023-05-20",
    dueDate: "2023-05-20",
  },
  {
    id: "INV-001235",
    user: "jane.smith@example.com",
    amount: 499.99,
    description: "Annual Subscription - Business Plan",
    status: "Paid",
    date: "2023-05-19",
    dueDate: "2023-05-19",
  },
  {
    id: "INV-001236",
    user: "robert.johnson@example.com",
    amount: 49.99,
    description: "Monthly Subscription - Basic Plan",
    status: "Paid",
    date: "2023-05-18",
    dueDate: "2023-05-18",
  },
  {
    id: "INV-001237",
    user: "emily.davis@example.com",
    amount: 99.99,
    description: "Monthly Subscription - Premium Plan",
    status: "Unpaid",
    date: "2023-05-20",
    dueDate: "2023-06-20",
  },
  {
    id: "INV-001238",
    user: "michael.wilson@example.com",
    amount: 199.99,
    description: "Course Purchase - AI Prompting Mastery",
    status: "Paid",
    date: "2023-05-17",
    dueDate: "2023-05-17",
  },
]

export default function Billing() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Generate Report</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$128,450</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +8.7%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Users className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +12.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <CreditCard className="w-4 h-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89.99</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +3.2%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <Calendar className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,580</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +5.8%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue for the current year
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[240px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
              <BarChart className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-gray-500 dark:text-gray-400">Revenue Chart Placeholder</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Revenue by Plan</CardTitle>
            <CardDescription>
              Distribution of revenue by subscription plan
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[240px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
              <PieChart className="h-16 w-16 text-gray-400" />
              <span className="ml-2 text-gray-500 dark:text-gray-400">Plan Distribution Chart</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList className="mb-4">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <Input placeholder="Search transactions..." className="w-64" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{transaction.description}</h3>
                    <p className="text-sm text-gray-500">{transaction.user}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === "Completed" ? "bg-green-100 text-green-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {transaction.status}
                    </span>
                    <span className="text-sm font-medium">
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Transaction ID: {transaction.id}</p>
                  <p>Payment Method: {transaction.paymentMethod}</p>
                  <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <Input placeholder="Search invoices..." className="w-64" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{invoice.description}</h3>
                    <p className="text-sm text-gray-500">{invoice.user}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      invoice.status === "Paid" ? "bg-green-100 text-green-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {invoice.status}
                    </span>
                    <span className="text-sm font-medium">
                      ${invoice.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Invoice ID: {invoice.id}</p>
                  <p>Due Date: {new Date(invoice.dueDate).toLocaleDateString()}</p>
                  <p>Date: {new Date(invoice.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          {/* Subscriptions content */}
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          {/* Financial Reports content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
