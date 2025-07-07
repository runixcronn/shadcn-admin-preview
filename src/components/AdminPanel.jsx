import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Settings,
  BarChart3,
  Users,
  Package,
  TrendingUp,
  Edit,
  Trash2,
  Eye,
  FileText,
  Smartphone,
  Mail,
  Globe,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { title: "Toplam Kullanıcı", value: "1,234", change: "+12%" },
    { title: "Aylık Gelir", value: "₺45,678", change: "+8%" },
    { title: "Aktif Denemeler", value: "89", change: "+23%" },
    { title: "Tamamlanan Analizler", value: "456", change: "+15%" },
  ];

  const revenueData = [
    { month: "Ocak", revenue: 25000, target: 30000 },
    { month: "Şubat", revenue: 28000, target: 32000 },
    { month: "Mart", revenue: 35000, target: 38000 },
    { month: "Nisan", revenue: 42000, target: 40000 },
    { month: "Mayıs", revenue: 38000, target: 42000 },
    { month: "Haziran", revenue: 45000, target: 48000 },
  ];

  const userActivityData = [
    { day: "Pzt", users: 120, tryons: 85 },
    { day: "Sal", users: 145, tryons: 102 },
    { day: "Çar", users: 165, tryons: 118 },
    { day: "Per", users: 180, tryons: 135 },
    { day: "Cum", users: 195, tryons: 145 },
    { day: "Cmt", users: 210, tryons: 168 },
    { day: "Paz", users: 155, tryons: 125 },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Ayşe Demir",
      email: "ayse@beautyai.com",
      role: "Premium",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Zeynep Kaya",
      email: "zeynep@beautyai.com",
      role: "Basic",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Melisa Yılmaz",
      email: "melisa@beautyai.com",
      role: "Basic",
      status: "Pasif",
    },
    {
      id: 4,
      name: "Selin Özkan",
      email: "selin@beautyai.com",
      role: "Premium",
      status: "Aktif",
    },
  ];

  const recentOrders = [
    {
      id: "#001",
      customer: "Elif Veli",
      amount: "₺29,99",
      status: "Tamamlandı",
      date: "2024-01-15",
    },
    {
      id: "#002",
      customer: "Fatma Şen",
      amount: "₺19,99",
      status: "İşleniyor",
      date: "2024-01-14",
    },
    {
      id: "#003",
      customer: "Hande Çelik",
      amount: "₺49,99",
      status: "İptal",
      date: "2024-01-13",
    },
    {
      id: "#004",
      customer: "Elif Yıldız",
      amount: "₺29,99",
      status: "Tamamlandı",
      date: "2024-01-12",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Aktif":
      case "Tamamlandı":
        return "bg-green-100 text-green-800";
      case "İşleniyor":
        return "bg-yellow-100 text-yellow-800";
      case "Pasif":
      case "İptal":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Başlık */}
      <header className="bg-black border-b border-gray-800">
        <div className="px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              NamıkAI Admin
            </h1>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white text-xs sm:text-sm px-2 sm:px-3"
              >
                <span className="hidden sm:inline">Ayarlar</span>
                <Settings className="sm:hidden w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-sm hover:bg-gray-800"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="@admin" />
                      <AvatarFallback className="bg-gray-700 text-white">
                        AD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-gray-900 border-gray-700 text-white"
                  align="end"
                  forceMount
                >
                  <DropdownMenuItem className="hover:bg-gray-800">
                    Profil
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800">
                    Hesap Ayarları
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800">
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800">
        <div className="px-3 sm:px-6">
          <div className="flex space-x-2 sm:space-x-8 overflow-x-auto">
            {["dashboard", "users", "orders", "analytics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-white text-white"
                    : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600"
                }`}
              >
                {tab === "dashboard" && (
                  <>
                    <BarChart3 className="sm:hidden w-4 h-4" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </>
                )}
                {tab === "users" && (
                  <>
                    <Users className="sm:hidden w-4 h-4" />
                    <span className="hidden sm:inline">Kullanıcılar</span>
                  </>
                )}
                {tab === "orders" && (
                  <>
                    <Package className="sm:hidden w-4 h-4" />
                    <span className="hidden sm:inline">Siparişler</span>
                  </>
                )}
                {tab === "analytics" && (
                  <>
                    <TrendingUp className="sm:hidden w-4 h-4" />
                    <span className="hidden sm:inline">Analitik</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Ana İçerik */}
      <main className="px-3 sm:px-6 py-4 sm:py-8">
        {activeTab === "dashboard" && (
          <div className="space-y-6 sm:space-y-8">
            {/* İstatistik Kartları */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-950 border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-6">
                    <CardTitle className="text-xs sm:text-sm font-medium text-gray-200">
                      {stat.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-800 text-gray-300 hidden sm:inline-flex"
                    >
                      {stat.change}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <div className="text-lg sm:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-green-400 mt-1 sm:hidden">
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Son Aktiviteler */}
            <div className="grid grid-cols-1 gap-6">
              {/* Son Kullanıcılar */}
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="p-3 sm:p-6">
                  <CardTitle className="text-white text-sm sm:text-base">
                    Son Kullanıcılar
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-xs sm:text-sm">
                    Sisteme yeni kayıt olan kullanıcılar
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {recentUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-sm bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
                          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                            <AvatarFallback className="bg-gray-700 text-white text-xs sm:text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm font-medium text-white truncate">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 flex-shrink-0">
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300 hidden sm:inline-flex"
                          >
                            {user.role}
                          </Badge>
                          <Badge
                            className={`text-xs ${getStatusColor(user.status)}`}
                          >
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Son Siparişler */}
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="p-3 sm:p-6">
                  <CardTitle className="text-white text-sm sm:text-base">
                    Son Siparişler
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-xs sm:text-sm">
                    En son yapılan siparişler
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-sm bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-white">
                            {order.id}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {order.customer}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-1 flex-shrink-0">
                          <p className="text-xs sm:text-sm font-medium text-white">
                            {order.amount}
                          </p>
                          <Badge
                            className={`text-xs ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <Card className="bg-gray-950 border-gray-800">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-white text-sm sm:text-base">
                Kullanıcı Yönetimi
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Tüm kullanıcıları görüntüle ve yönet
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6 sm:pt-0">
              {/* Mobil Görünüm */}
              <div className="sm:hidden">
                <div className="space-y-3 p-3">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="bg-gray-800 rounded-sm p-3 space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gray-700 text-white text-xs">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300"
                          >
                            {user.role}
                          </Badge>
                          <Badge
                            className={`text-xs ${getStatusColor(user.status)}`}
                          >
                            {user.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 text-xs px-2"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700 text-xs px-2"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Masaüstü Tablo Görünümü */}
              <div className="hidden sm:block">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-300">Kullanıcı</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Rol</TableHead>
                      <TableHead className="text-gray-300">Durum</TableHead>
                      <TableHead className="text-gray-300">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-gray-800 hover:bg-gray-800"
                      >
                        <TableCell className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-gray-700 text-white">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-white">
                            {user.name}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {user.email}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-gray-600 text-gray-300"
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              Düzenle
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Sil
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "orders" && (
          <Card className="bg-gray-950 border-gray-800">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-white text-sm sm:text-base">
                Sipariş Yönetimi
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Tüm siparişleri görüntüle ve yönet
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6 sm:pt-0">
              {/* Mobil Görünüm */}
              <div className="sm:hidden">
                <div className="space-y-3 p-3">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-gray-800 rounded-sm p-3 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">
                            {order.id}
                          </p>
                          <p className="text-xs text-gray-400">
                            {order.customer}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">
                            {order.amount}
                          </p>
                          <p className="text-xs text-gray-400">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge
                          className={`text-xs ${getStatusColor(order.status)}`}
                        >
                          {order.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 text-xs px-2"
                          >
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-xs px-2"
                          >
                            <FileText className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Masaüstü Tablo Görünümü */}
              <div className="hidden sm:block">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-300">
                        Sipariş ID
                      </TableHead>
                      <TableHead className="text-gray-300">Müşteri</TableHead>
                      <TableHead className="text-gray-300">Tutar</TableHead>
                      <TableHead className="text-gray-300">Durum</TableHead>
                      <TableHead className="text-gray-300">Tarih</TableHead>
                      <TableHead className="text-gray-300">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow
                        key={order.id}
                        className="border-gray-800 hover:bg-gray-800"
                      >
                        <TableCell className="font-medium text-white">
                          {order.id}
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {order.customer}
                        </TableCell>
                        <TableCell className="font-medium text-white">
                          {order.amount}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {order.date}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              Görüntüle
                            </Button>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Güncelle
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-white text-sm sm:text-base">
                  Gelir Analizi
                </CardTitle>
                <CardDescription className="text-gray-400 text-xs sm:text-sm">
                  Aylık gelir trendi vs hedef
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <div className="h-48 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                      />
                      <YAxis
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        tickFormatter={(value) => `₺${value.toLocaleString()}`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "1px solid #374151",
                          borderRadius: "4px",
                          fontSize: "12px",
                          color: "#fff",
                        }}
                        formatter={(value, name) => [
                          `₺${value.toLocaleString()}`,
                          name === "revenue" ? "Gelir" : "Hedef",
                        ]}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3b82f6", r: 4 }}
                        name="revenue"
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#10b981"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: "#10b981", r: 4 }}
                        name="target"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-white text-sm sm:text-base">
                  Kullanıcı Aktivitesi
                </CardTitle>
                <CardDescription className="text-gray-400 text-xs sm:text-sm">
                  Haftalık kullanıcı ve makyaj deneme sayıları
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <div className="h-48 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis
                        dataKey="day"
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                      />
                      <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "1px solid #374151",
                          borderRadius: "4px",
                          fontSize: "12px",
                          color: "#fff",
                        }}
                        formatter={(value, name) => [
                          value,
                          name === "users"
                            ? "Kullanıcılar"
                            : "Makyaj Denemeleri",
                        ]}
                      />
                      <Bar
                        dataKey="users"
                        fill="#8b5cf6"
                        radius={[2, 2, 0, 0]}
                        name="users"
                      />
                      <Bar
                        dataKey="tryons"
                        fill="#f59e0b"
                        radius={[2, 2, 0, 0]}
                        name="tryons"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Alt Bilgi */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-8">
        <div className="px-3 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Şirket Bilgileri */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
                Namık AI Studio
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Yapay zeka teknolojisi ile makyaj deneyiminizi bir sonraki
                seviyeye taşıyın.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Smartphone className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Hizmetler */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
                Hizmetler
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Makyaj Analizi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sanal Makyaj Denemesi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Renk Eşleştirme
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cilt Tonu Analizi
                  </a>
                </li>
              </ul>
            </div>

            {/* Destek */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
                Destek
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Dokümantasyonu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kullanım Kılavuzu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Yasal */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
                Yasal
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kullanım Şartları
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Çerez Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    KVKK
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Alt Çubuk */}
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Namık AI Studio. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-4 text-xs sm:text-sm">
                <span className="text-gray-400">Powered by</span>
                <span className="text-white font-semibold">
                  Namık Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel;
