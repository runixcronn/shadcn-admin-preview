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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
  // ...activeTab kaldırıldı
  const [editingUser, setEditingUser] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [users, setUsers] = useState([
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
  ]);

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

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditDialogOpen(true);
  };

  const handleSaveUser = () => {
    if (editingUser) {
      setUsers(
        users.map((user) => (user.id === editingUser.id ? editingUser : user))
      );
      setIsEditDialogOpen(false);
      setEditingUser(null);
    }
  };

  const handleCancelEdit = () => {
    setIsEditDialogOpen(false);
    setEditingUser(null);
  };

  const handleInputChange = (field, value) => {
    if (editingUser) {
      setEditingUser({
        ...editingUser,
        [field]: value,
      });
    }
  };

  const recentUsers = users;

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
        return "bg-gray-400 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        {/* Dashboard */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="bg-gray-800 border border-gray-700 shadow-lg">
                <CardHeader className="p-3 sm:p-6">
                  <CardTitle className="text-white text-sm sm:text-base">
                    {stat.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-xs sm:text-sm">
                    {stat.value}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <span className="text-green-500 text-xs font-semibold">
                    {stat.change}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Users */}
        <section className="mb-8">
          <Card className="bg-gray-800 border border-gray-700 shadow-lg">
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
                      className="bg-gray-700 rounded-sm p-3 space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gray-600 text-white text-xs">
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
                            className="text-xs border-gray-600 text-gray-400"
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
                            className="border-gray-600 text-gray-400 hover:bg-gray-700 text-xs px-2"
                            onClick={() => handleEditUser(user)}
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
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-400">Kullanıcı</TableHead>
                      <TableHead className="text-gray-400">Email</TableHead>
                      <TableHead className="text-gray-400">Rol</TableHead>
                      <TableHead className="text-gray-400">Durum</TableHead>
                      <TableHead className="text-gray-400">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-gray-700 hover:bg-gray-700 text-gray-100"
                      >
                        <TableCell className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-gray-600 text-white">
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
                        <TableCell className="text-gray-400">
                          {user.email}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-gray-600 text-gray-400"
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
                              className="border-gray-600 text-gray-400 hover:bg-gray-700"
                              onClick={() => handleEditUser(user)}
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
        </section>

        {/* Orders */}
        <section className="mb-8">
          <Card className="bg-gray-800 border border-gray-700 shadow-lg">
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
                      className="bg-gray-700 rounded-sm p-3 space-y-2"
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
                            className="border-gray-600 text-gray-400 hover:bg-gray-700 text-xs px-2"
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
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-400">
                        Sipariş ID
                      </TableHead>
                      <TableHead className="text-gray-400">Müşteri</TableHead>
                      <TableHead className="text-gray-400">Tutar</TableHead>
                      <TableHead className="text-gray-400">Durum</TableHead>
                      <TableHead className="text-gray-400">Tarih</TableHead>
                      <TableHead className="text-gray-400">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow
                        key={order.id}
                        className="border-gray-700 hover:bg-gray-700 text-gray-100"
                      >
                        <TableCell className="font-medium text-white">
                          {order.id}
                        </TableCell>
                        <TableCell className="text-gray-400">
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
                        <TableCell className="text-gray-400">
                          {order.date}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:bg-gray-700"
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
        </section>

        {/* Analytics */}
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-gray-800 border border-gray-700 shadow-lg">
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

            <Card className="bg-gray-800 border border-gray-700 shadow-lg">
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
        </section>
      </main>
      <footer className="bg-gray-900 border-t border-gray-700 mt-8">
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
                <div className="w-8 h-8 bg-gray-700 rounded-sm flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
                  <Smartphone className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-sm flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-sm flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
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
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                2025 Namık AI Studio. Tüm hakları saklıdır.
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
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-gray-800 border border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-white">
              {editingUser ? "Kullanıcıyı Düzenle" : "Kullanıcı Ekle"}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {editingUser
                ? "Kullanıcı bilgilerini güncelleyin."
                : "Yeni bir kullanıcı oluşturun."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">
                İsim
              </Label>
              <Input
                id="name"
                value={editingUser?.name || ""}
                onValueChange={(value) => handleInputChange("name", value)}
                className="bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Kullanıcı adı"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={editingUser?.email || ""}
                onValueChange={(value) => handleInputChange("email", value)}
                className="bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Kullanıcı emaili"
              />
            </div>
            <div>
              <Label htmlFor="role" className="text-gray-300">
                Rol
              </Label>
              <Select
                id="role"
                value={editingUser?.role || "Basic"}
                onValueChange={(value) => handleInputChange("role", value)}
                className="bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Rol seçin" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Basic" className="text-gray-300">
                    Temel
                  </SelectItem>
                  <SelectItem value="Premium" className="text-gray-300">
                    Premium
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status" className="text-gray-300">
                Durum
              </Label>
              <Select
                id="status"
                value={editingUser?.status || "Aktif"}
                onValueChange={(value) => handleInputChange("status", value)}
                className="bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Durum seçin" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Aktif" className="text-gray-300">
                    Aktif
                  </SelectItem>
                  <SelectItem value="Pasif" className="text-gray-300">
                    Pasif
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={handleCancelEdit}
            >
              İptal
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSaveUser}
            >
              {editingUser ? "Kaydet" : "Oluştur"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
