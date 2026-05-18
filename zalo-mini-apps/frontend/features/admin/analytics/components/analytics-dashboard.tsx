import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Views',
    value: '128.5K',
    change: '+12.5%',
    trend: 'up',
    icon: Eye,
  },
  {
    title: 'Unique Visitors',
    value: '45.2K',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Avg. Session',
    value: '4m 32s',
    change: '-2.1%',
    trend: 'down',
    icon: Clock,
  },
  {
    title: 'Bounce Rate',
    value: '32.1%',
    change: '+1.5%',
    trend: 'down',
    icon: TrendingDown,
  },
];

const topPages = [
  { page: '/home', views: '45.2K', visitors: '32.1K', bounceRate: '28%' },
  { page: '/products', views: '38.7K', visitors: '28.4K', bounceRate: '35%' },
  { page: '/about', views: '21.3K', visitors: '18.9K', bounceRate: '22%' },
  { page: '/contact', views: '15.8K', visitors: '12.2K', bounceRate: '41%' },
  { page: '/blog/post-1', views: '12.4K', visitors: '9.8K', bounceRate: '38%' },
];

const trafficSources = [
  { source: 'Direct', value: 42, color: 'bg-blue-500' },
  { source: 'Search', value: 28, color: 'bg-green-500' },
  { source: 'Social', value: 18, color: 'bg-purple-500' },
  { source: 'Referral', value: 12, color: 'bg-orange-500' },
];

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track your website performance and user engagement.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`} />
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
          <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Trends</CardTitle>
                <CardDescription>Views and visitors over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {[65, 80, 45, 90, 75, 95, 70].map((value, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all hover:from-blue-600 hover:to-blue-500"
                        style={{ height: `${value}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{source.source}</span>
                      <span className="font-medium">{source.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${source.color} rounded-full transition-all`}
                        style={{ width: `${source.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages on your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, i) => (
                  <div
                    key={page.page}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-medium">{page.page}</p>
                        <p className="text-xs text-muted-foreground">
                          {page.visitors} visitors
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{page.views}</p>
                      <p className="text-xs text-muted-foreground">
                        {page.bounceRate} bounce
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Breakdown</CardTitle>
              <CardDescription>Detailed breakdown of traffic sources</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {trafficSources.map((source) => (
                <div
                  key={source.source}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                >
                  <div className={`h-12 w-12 rounded-lg ${source.color} flex items-center justify-center`}>
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{source.source}</p>
                    <p className="text-2xl font-bold">{source.value}%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
