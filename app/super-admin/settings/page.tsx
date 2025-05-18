import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Save,
  RefreshCw,
  Shield,
  Globe,
  Mail,
  Bell,
  Database,
  HardDrive,
  FileText,
  Upload,
  Download,
} from "lucide-react"

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
      </div>

      <Tabs defaultValue="general">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <TabsList className="flex flex-col w-full h-auto p-0 bg-transparent space-y-1">
              <TabsTrigger value="general" className="justify-start px-4 py-2 h-10 font-normal">
                <Globe className="h-4 w-4 mr-2" />
                General
              </TabsTrigger>
              <TabsTrigger value="security" className="justify-start px-4 py-2 h-10 font-normal">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start px-4 py-2 h-10 font-normal">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="email" className="justify-start px-4 py-2 h-10 font-normal">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </TabsTrigger>
              <TabsTrigger value="storage" className="justify-start px-4 py-2 h-10 font-normal">
                <Database className="h-4 w-4 mr-2" />
                Storage
              </TabsTrigger>
              <TabsTrigger value="backup" className="justify-start px-4 py-2 h-10 font-normal">
                <HardDrive className="h-4 w-4 mr-2" />
                Backup & Restore
              </TabsTrigger>
              <TabsTrigger value="logs" className="justify-start px-4 py-2 h-10 font-normal">
                <FileText className="h-4 w-4 mr-2" />
                System Logs
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="general" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure general platform settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="site-name">Platform Name</Label>
                      <Input id="site-name" defaultValue="TrainingX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="site-url">Platform URL</Label>
                      <Input id="site-url" defaultValue="https://trainingx.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input id="admin-email" defaultValue="admin@trainingx.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Default Timezone</Label>
                      <select
                        id="timezone"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        <option>UTC</option>
                        <option>America/New_York</option>
                        <option>America/Chicago</option>
                        <option>America/Denver</option>
                        <option>America/Los_Angeles</option>
                        <option>Europe/London</option>
                        <option>Europe/Paris</option>
                        <option>Asia/Tokyo</option>
                        <option>Australia/Sydney</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Put the platform in maintenance mode</p>
                      </div>
                      <Switch id="maintenance-mode" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security and authentication settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Require 2FA for admin accounts</p>
                      </div>
                      <Switch id="two-factor" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="password-policy">Strong Password Policy</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enforce strong password requirements</p>
                      </div>
                      <Switch id="password-policy" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="session-timeout">Session Timeout</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Automatically log out inactive users</p>
                      </div>
                      <Switch id="session-timeout" defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeout-duration">Timeout Duration (minutes)</Label>
                      <Input id="timeout-duration" type="number" defaultValue="30" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ip-restriction">IP Restriction</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Restrict admin access to specific IP addresses
                        </p>
                      </div>
                      <Switch id="ip-restriction" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure system notifications and alerts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="user-registration">User Registration</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Notify admins when new users register
                        </p>
                      </div>
                      <Switch id="user-registration" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="course-completion">Course Completion</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Notify admins when users complete courses
                        </p>
                      </div>
                      <Switch id="course-completion" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="support-tickets">Support Tickets</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Notify admins about new support tickets
                        </p>
                      </div>
                      <Switch id="support-tickets" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="system-alerts">System Alerts</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Notify admins about system issues</p>
                      </div>
                      <Switch id="system-alerts" defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notification-emails">Notification Emails</Label>
                      <Input id="notification-emails" defaultValue="admin@trainingx.com, alerts@trainingx.com" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Comma-separated list of email addresses
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="email" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Email Settings</CardTitle>
                  <CardDescription>Configure email server and templates.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-server">SMTP Server</Label>
                      <Input id="smtp-server" defaultValue="smtp.trainingx.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">SMTP Port</Label>
                      <Input id="smtp-port" defaultValue="587" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smtp-username">SMTP Username</Label>
                      <Input id="smtp-username" defaultValue="notifications@trainingx.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smtp-password">SMTP Password</Label>
                      <Input id="smtp-password" type="password" defaultValue="••••••••••••" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="smtp-encryption">Use Encryption (TLS)</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Secure email communication</p>
                      </div>
                      <Switch id="smtp-encryption" defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from-email">From Email</Label>
                      <Input id="from-email" defaultValue="no-reply@trainingx.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="from-name">From Name</Label>
                      <Input id="from-name" defaultValue="TrainingX Platform" />
                    </div>

                    <Button variant="outline" className="w-full">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Test Email Configuration
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="storage" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Storage Settings</CardTitle>
                  <CardDescription>Configure storage providers and limits.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="storage-provider">Storage Provider</Label>
                      <select
                        id="storage-provider"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        <option>Amazon S3</option>
                        <option>Google Cloud Storage</option>
                        <option>Microsoft Azure Blob Storage</option>
                        <option>Local Storage</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bucket-name">Bucket Name</Label>
                      <Input id="bucket-name" defaultValue="trainingx-assets" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="access-key">Access Key</Label>
                      <Input id="access-key" defaultValue="AKIAIOSFODNN7EXAMPLE" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="secret-key">Secret Key</Label>
                      <Input id="secret-key" type="password" defaultValue="••••••••••••" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Input id="region" defaultValue="us-east-1" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-upload">Maximum Upload Size (MB)</Label>
                      <Input id="max-upload" type="number" defaultValue="50" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="image-optimization">Image Optimization</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automatically optimize uploaded images
                        </p>
                      </div>
                      <Switch id="image-optimization" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="backup" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Backup & Restore</CardTitle>
                  <CardDescription>Manage system backups and restoration.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Schedule regular system backups</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="backup-frequency">Backup Frequency</Label>
                      <select
                        id="backup-frequency"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      >
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="backup-time">Backup Time</Label>
                      <Input id="backup-time" type="time" defaultValue="02:00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="retention-period">Retention Period (days)</Label>
                      <Input id="retention-period" type="number" defaultValue="30" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="backup-location">Backup Storage Location</Label>
                      <Input id="backup-location" defaultValue="s3://trainingx-backups" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="include-media">Include Media Files</Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Include uploaded files in backups</p>
                      </div>
                      <Switch id="include-media" defaultChecked />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Create Backup Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Restore from Backup
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="logs" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>System Logs</CardTitle>
                  <CardDescription>View and manage system logs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <select className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm">
                        <option>All Logs</option>
                        <option>Error Logs</option>
                        <option>Access Logs</option>
                        <option>Security Logs</option>
                        <option>System Logs</option>
                      </select>
                      <Input type="date" className="w-full sm:w-auto" />
                      <Button variant="outline" className="w-full sm:w-auto">
                        Apply Filters
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Download className="h-4 w-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>

                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <div className="h-64 p-4 text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-800 overflow-y-auto">
                        <p>[2023-05-20 10:15:32] INFO: System started successfully</p>
                        <p>[2023-05-20 10:16:45] INFO: User john.doe@example.com logged in</p>
                        <p>[2023-05-20 10:18:22] INFO: New course "Advanced AI Prompting" created</p>
                        <p>[2023-05-20 10:25:17] WARNING: High CPU usage detected (85%)</p>
                        <p>[2023-05-20 10:30:05] INFO: Backup process started</p>
                        <p>[2023-05-20 10:35:12] INFO: Backup completed successfully</p>
                        <p>[2023-05-20 10:40:33] ERROR: Failed to send email to user@example.com</p>
                        <p>[2023-05-20 10:45:21] INFO: User jane.smith@example.com logged in</p>
                        <p>[2023-05-20 10:50:18] INFO: Certificate issued to user robert.johnson@example.com</p>
                        <p>[2023-05-20 10:55:42] WARNING: Database connection pool reaching limit</p>
                        <p>[2023-05-20 11:00:15] INFO: Scheduled maintenance notification sent</p>
                        <p>[2023-05-20 11:05:33] INFO: User david.miller@example.com logged in</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
