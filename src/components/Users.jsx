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
import { Avatar, AvatarFallback } from "./ui/avatar";
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
import { Edit, Trash2 } from "lucide-react";

const Users = () => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Pasif":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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

  return (
    <>
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
              {users.map((user) => (
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
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-300">Kullanıcı</TableHead>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Rol</TableHead>
                  <TableHead className="text-gray-300">Durum</TableHead>
                  <TableHead className="text-gray-300">İşlemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
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

      {/* Kullanıcı Düzenleme Diyaloğu */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-gray-950 border-gray-800">
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
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Kullanıcı emaili"
              />
            </div>
            <div>
              <Label htmlFor="role" className="text-gray-300">
                Rol
              </Label>
              <Select
                value={editingUser?.role || "Basic"}
                onValueChange={(value) => handleInputChange("role", value)}
              >
                <SelectTrigger className="bg-gray-800 text-white border-gray-600">
                  <SelectValue placeholder="Rol seçin" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Basic" className="text-gray-300">
                    Basic
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
                value={editingUser?.status || "Aktif"}
                onValueChange={(value) => handleInputChange("status", value)}
              >
                <SelectTrigger className="bg-gray-800 text-white border-gray-600">
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
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={handleCancelEdit}
            >
              İptal
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleSaveUser}
            >
              {editingUser ? "Kaydet" : "Oluştur"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Users;
