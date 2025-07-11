import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Eye, FileText } from "lucide-react";

const Orders = () => {
  const orders = [
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
    {
      id: "#005",
      customer: "Seda Kaya",
      amount: "₺39,99",
      status: "İşleniyor",
      date: "2024-01-11",
    },
    {
      id: "#006",
      customer: "Merve Demir",
      amount: "₺25,99",
      status: "Tamamlandı",
      date: "2024-01-10",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Tamamlandı":
        return "bg-green-100 text-green-800";
      case "İşleniyor":
        return "bg-yellow-100 text-yellow-800";
      case "İptal":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
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
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-800 rounded-sm p-3 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{order.id}</p>
                    <p className="text-xs text-gray-400">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">
                      {order.amount}
                    </p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className={`text-xs ${getStatusColor(order.status)}`}>
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
                <TableHead className="text-gray-300">Sipariş ID</TableHead>
                <TableHead className="text-gray-300">Müşteri</TableHead>
                <TableHead className="text-gray-300">Tutar</TableHead>
                <TableHead className="text-gray-300">Durum</TableHead>
                <TableHead className="text-gray-300">Tarih</TableHead>
                <TableHead className="text-gray-300">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
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
                  <TableCell className="text-gray-300">{order.date}</TableCell>
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
  );
};

export default Orders;
