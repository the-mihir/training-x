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
            <CardDescription>Monthly revenue for the current year</CardDescription>
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
            <CardDescription>Distribution of revenue by subscription plan</CardDescription>
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

        <TabsContent value="transactions">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>View and manage payment transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
                <Button variant="outline" className="flex items-center gap-1 w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>

              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">ID</th>
                        <th className="py-3 px-4 text-left font-medium">User</th>
                        <th className="py-3 px-4 text-left font-medium">Amount</th>
                        <th className="py-3 px-4 text-left font-medium">Description</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4">{transaction.id}</td>
                          <td className="py-3 px-4">{transaction.user}</td>
                          <td className="py-3 px-4">${transaction.amount.toFixed(2)}</td>
                          <td className="py-3 px-4">{transaction.description}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.status === "Completed"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{transaction.date}</td>
                          <td className="py-3 px-4">{transaction.paymentMethod}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and manage customer invoices.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search invoices..." className="w-full pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
                <Button variant="outline" className="flex items-center gap-1 w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>

              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">ID</th>
                        <th className="py-3 px-4 text-left font-medium">User</th>
                        <th className="py-3 px-4 text-left font-medium">Amount</th>
                        <th className="py-3 px-4 text-left font-medium">Description</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4">{invoice.id}</td>
                          <td className="py-3 px-4">{invoice.user}</td>
                          <td className="py-3 px-4">${invoice.amount.toFixed(2)}</td>
                          <td className="py-3 px-4">{invoice.description}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                invoice.status === "Paid"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{invoice.date}</td>
                          <td className="py-3 px-4">{invoice.dueDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>View and manage customer subscriptions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">
                  Subscription management interface will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Generate and view financial reports.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">Financial reports interface will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
