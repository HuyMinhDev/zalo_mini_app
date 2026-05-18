import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bell,
  Check,
  CheckCheck,
  Trash2,
  MessageSquare,
  UserPlus,
  AlertCircle,
  Info,
  Gift,
  Settings,
  MoreVertical,
} from 'lucide-react';

const notifications = {
  all: [
    {
      id: 1,
      type: 'message',
      title: 'New message from Jane',
      description: 'Hey! Can you review the latest design updates?',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registered',
      description: 'Michael Chen just signed up for an account.',
      time: '15 min ago',
      read: false,
    },
    {
      id: 3,
      type: 'alert',
      title: 'System maintenance',
      description: 'Scheduled maintenance on May 20th at 2:00 AM.',
      time: '1 hour ago',
      read: true,
    },
    {
      id: 4,
      type: 'info',
      title: 'Policy update',
      description: 'Terms of service have been updated. Please review.',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 5,
      type: 'gift',
      title: 'Welcome bonus',
      description: 'You have received a $50 credit for your first month!',
      time: '1 day ago',
      read: true,
    },
  ],
  unread: [
    {
      id: 1,
      type: 'message',
      title: 'New message from Jane',
      description: 'Hey! Can you review the latest design updates?',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registered',
      description: 'Michael Chen just signed up for an account.',
      time: '15 min ago',
      read: false,
    },
  ],
};

const getIcon = (type: string) => {
  switch (type) {
    case 'message':
      return <MessageSquare className="h-5 w-5 text-blue-500" />;
    case 'user':
      return <UserPlus className="h-5 w-5 text-green-500" />;
    case 'alert':
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    case 'info':
      return <Info className="h-5 w-5 text-purple-500" />;
    case 'gift':
      return <Gift className="h-5 w-5 text-yellow-500" />;
    default:
      return <Bell className="h-5 w-5 text-muted-foreground" />;
  }
};

const getBgColor = (type: string) => {
  switch (type) {
    case 'message':
      return 'bg-blue-500/10';
    case 'user':
      return 'bg-green-500/10';
    case 'alert':
      return 'bg-red-500/10';
    case 'info':
      return 'bg-purple-500/10';
    case 'gift':
      return 'bg-yellow-500/10';
    default:
      return 'bg-muted';
  }
};

export function NotificationsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest activities and alerts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <CheckCheck className="h-4 w-4" />
            Mark all read
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">All</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.all.length}</div>
            <p className="text-xs text-muted-foreground">Total notifications</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center rounded-full">
              {notifications.unread.length}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.unread.length}</div>
            <p className="text-xs text-muted-foreground">Pending to read</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Read</CardTitle>
            <Check className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {notifications.all.length - notifications.unread.length}
            </div>
            <p className="text-xs text-muted-foreground">Already viewed</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread" className="relative">
            Unread
            {notifications.unread.length > 0 && (
              <Badge
                variant="destructive"
                className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs"
              >
                {notifications.unread.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          {notifications.all.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all hover:bg-muted/50 ${
                !notification.read ? 'border-l-4 border-l-blue-500' : ''
              }`}
            >
              <CardContent className="flex items-start gap-4 p-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getBgColor(notification.type)}`}>
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {notification.title}
                    </p>
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                <div className="flex items-center gap-1">
                  {!notification.read && (
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Mark as read">
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-3">
          {notifications.unread.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CheckCheck className="h-12 w-12 text-green-500 mb-4" />
                <p className="text-lg font-medium">All caught up!</p>
                <p className="text-sm text-muted-foreground">
                  You have no unread notifications.
                </p>
              </CardContent>
            </Card>
          ) : (
            notifications.unread.map((notification) => (
              <Card
                key={notification.id}
                className="border-l-4 border-l-blue-500 hover:bg-muted/50 transition-all"
              >
                <CardContent className="flex items-start gap-4 p-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getBgColor(notification.type)}`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Mark as read">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
