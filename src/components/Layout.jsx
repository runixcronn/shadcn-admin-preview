import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Menu, X, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Settings,
  BarChart3,
  Users,
  Package,
  TrendingUp,
  Smartphone,
  Mail,
  Globe,
  LogOut,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
} from "./ui/sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const navigationItems = [
    { path: "/", label: "Dashboard", icon: <BarChart3 className="w-4 h-4" /> },
    {
      path: "/users",
      label: "Kullanıcılar",
      icon: <Users className="w-4 h-4" />,
    },
    {
      path: "/orders",
      label: "Siparişler",
      icon: <Package className="w-4 h-4" />,
    },
    {
      path: "/analytics",
      label: "Analitik",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden bg-gray-950 border-b border-gray-800 p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-transparent">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-gray-900 border-r border-gray-800 p-0">
                <SheetHeader className="p-4 border-b border-gray-800">
                  <SheetTitle className="text-white text-left">Menü</SheetTitle>
                </SheetHeader>
                <div className="p-2">
                  <SidebarMenu>
                    {navigationItems.map(item => (
                      <SidebarMenuButton 
                        key={item.path} 
                        asChild 
                        isActive={currentPath === item.path}
                      >
                        <Link to={item.path} className="flex items-center gap-3 p-3 hover:bg-gray-800 text-gray-100 rounded-md">
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    ))}
                  </SidebarMenu>
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-bold">NamıkAI Admin</h1>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none">
                  <Avatar className="size-8 cursor-pointer">
                    <AvatarImage src="/avatars/01.png" className="rounded-none" alt="@admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-gray-900 border-gray-700 text-gray-200">
                <DropdownMenuItem className="flex items-center cursor-pointer px-3 py-2 text-sm hover:bg-gray-800 focus:bg-gray-800 focus:text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Ayarlar</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center cursor-pointer px-3 py-2 text-sm hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-red-400 hover:text-red-300">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Çıkış Yap</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden pt-16 md:pt-0 relative">
          {/* Desktop Sidebar */}
          <div className={`hidden md:flex flex-col fixed top-0 left-0 h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-gray-950 border-r border-gray-800 z-40`}>
            <div className="overflow-y-auto h-full flex flex-col">
              <div className="p-4 flex-1">
              <div className={`flex items-center mb-6 ${isCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
                {/* NamıkAI yazı logo - sadece geniş durumda göster */}
                {!isCollapsed && <h1 className="text-xl font-bold text-white">NamıkAI</h1>}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 text-gray-400 hover:bg-gray-800 hover:text-white ${isCollapsed ? 'mx-auto' : ''}`}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
              </div>
              
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuButton
                    key={item.path}
                    asChild
                    isActive={currentPath === item.path}
                    className={`${isCollapsed ? 'justify-center' : ''}`}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 hover:bg-gray-800 text-gray-100 rounded-md ${isCollapsed ? 'justify-center px-0' : ''}`}
                      title={isCollapsed ? item.label : ''}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      {!isCollapsed && <span className="truncate">{item.label}</span>}
                    </Link>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </div>
            <div className={`p-4 border-t border-gray-800 ${isCollapsed ? 'flex justify-center px-0' : ''}`}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className={`flex items-center ${!isCollapsed ? 'w-full' : 'justify-center'}`}>
                    <Avatar className="size-10 cursor-pointer">
                      <AvatarImage src="/avatars/01.png" alt="@admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                      <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-white truncate">Admin</p>
                        <p className="text-xs text-gray-400 truncate">admin@example.com</p>
                      </div>
                    )}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-gray-900 border-gray-700 text-gray-200"
                  align={isCollapsed ? 'center' : 'start'}
                  sideOffset={5}
                >
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-white">Admin</p>
                    <p className="text-xs text-gray-400 truncate">admin@example.com</p>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="flex items-center cursor-pointer px-2 py-2 text-sm hover:bg-gray-800 focus:bg-gray-800 focus:text-white">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center cursor-pointer px-2 py-2 text-sm hover:bg-gray-800 focus:bg-gray-800 focus:text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Ayarlar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="flex items-center cursor-pointer px-2 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-300">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-0 w-full transition-all duration-300" style={{ paddingLeft: isCollapsed ? '5rem' : '16rem' }}>
            <main className="flex-1 overflow-auto px-3 sm:px-6 py-4 sm:py-8">
              {children}
            </main>
          {/* Alt Bilgi */}
          <footer className="bg-gray-950 border-t border-gray-800 mt-8">
            <div className="px-3 sm:px-6 py-6 sm:py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
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
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
