import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle 
        title="Settings" 
        description="Manage your account settings and preferences"
      />
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and public profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?key=69xc7" alt="Profile" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    Upload New Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove Photo
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, GIF or PNG. Max size 2MB.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="Alex" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Johnson" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" defaultValue="Alex J." />
                <p className="text-xs text-muted-foreground">
                  This is how your name will appear to other users.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself..."
                  className="min-h-32"
                  defaultValue="Learning enthusiast passionate about AI and technology. Currently exploring prompt engineering and financial literacy."
                />
                <p className="text-xs text-muted-foreground">
                  Brief description for your profile. Maximum 200 characters.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., New York, NY" defaultValue="San Francisco, CA" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Social Profiles</CardTitle>
              <CardDescription>
                Connect your social media accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
                { name: "Twitter", placeholder: "https://twitter.com/username" },
                { name: "GitHub", placeholder: "https://github.com/username" },
              ].map((social, i) => (
                <div key={i} className="space-y-2">
                  <Label htmlFor={`social-${i}`}>{social.name}</Label>
                  <Input id={`social-${i}`} placeholder={social.placeholder} />
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button>Save Social Profiles</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your account details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="alex@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="alexj" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select 
                  id="language" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select 
                  id="timezone" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  defaultValue="America/Los_Angeles"
                >
                  <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                  <option value="America/New_York">Eastern Time (US & Canada)</option>
                  <option value="Europe/London">London</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                  <option value="Australia/Sydney">Sydney</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Account</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Change Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>
                Irreversible account actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-destructive/50 p-4">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. All your data will be permanently removed.
                </p>
                <Button variant="destructive" className="mt-4">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                {[
                  { name: "Course updates", description: "New content in enrolled courses" },
                  { name: "Assignment reminders", description: "Reminders for upcoming deadlines" },
                  { name: "Feedback received", description: "When you receive feedback on submissions" },
                  { name: "Certificate issued", description: "When you earn a new certificate" },
                  { name: "New course recommendations", description: "Personalized course suggestions" },
                ].map((notification, i) => (
                  <div key={i} className="flex items-center justify-between space-x-2">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                    <Switch defaultChecked={i < 3} />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                {[
                  { name: "New messages", description: "When you receive new messages" },
                  { name: "Course announcements", description: "Important announcements for your courses" },
                  { name: "Learning reminders", description: "Daily reminders to continue learning" },
                ].map((notification, i) => (
                  <div key={i} className="flex items-center justify-between space-x-2">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                    <Switch defaultChecked={i < 2} />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Schedule</CardTitle>
              <CardDescription>
                Set your preferred notification times
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiet-hours-start">Quiet Hours Start</Label>
                <Input id="quiet-hours-start" type="time" defaultValue="22:00" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quiet-hours-end">Quiet Hours End</Label>
                <Input id="quiet-hours-end" type="time" defaultValue="08:00" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="weekend-pause" />
                <Label htmlFor="weekend-pause">Pause notifications on weekends</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Schedule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Control your privacy and visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile Visibility</h3>
                <div className="space-y-2">
                  <Label htmlFor="profile-visibility">Who can see your profile</Label>
                  <select 
                    id="profile-visibility" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="everyone"
                  >
                    <option value="everyone">Everyone</option>
                    <option value="students">TrainingX Students Only</option>
                    <option value="connections">My Connections Only</option>
                    <option value="private">Private (Only Me)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Learning Activity</h3>
                {[
                  { name: "Show courses I'm taking", description: "Display enrolled courses on your profile" },
                  { name: "Show completed courses", description: "Display completed courses on your profile" },
                  { name: "Show certificates", description: "Display earned certificates on your profile" },
                  { name: "Show badges", description: "Display earned badges on your profile" },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between space-x-2">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {setting.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Usage</h3>
                {[
                  { name: "Learning analytics", description: "Allow us to analyze your learning patterns to improve recommendations" },
                  { name: "Personalized content", description: "Receive personalized content based on your interests and activity" },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between space-x-2">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {setting.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Privacy Settings</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
              <CardDescription>
                Manage your data and privacy options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium">Download Your Data</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  You can request a copy of your personal data at any time.
                </p>
                <Button variant="outline" className="mt-4">
                  Request Data Export
                </Button>
              </div>
              
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium">Privacy Policy</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Review our privacy policy to understand how we handle your data.
                </p>
                <Button variant="link" className="mt-2 px-0">
                  View Privacy Policy
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Manage your subscription and billing details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Pro Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Billed annually
                    </p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="ml-1 text-sm text-muted-foreground">/year</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                    <span className="text-sm">Unlimited access to all courses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                    <span className="text-sm">Unlimited simulations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                    <span className="text-sm">Priority support</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline">Cancel Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

\
