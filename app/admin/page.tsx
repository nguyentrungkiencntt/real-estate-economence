"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Home, Users, BarChart2, Settings, Bell, Search } from "lucide-react";
import { useRouter } from "next/navigation";

type Message = { role: "user" | "assistant"; content: string };

const stats = [
  { title: "Tổng BĐS", value: "12,450", icon: Home },
  { title: "Người Dùng", value: "32,190", icon: Users },
  { title: "Doanh Thu", value: "₫48.2 Tỷ", icon: BarChart2 },
  { title: "Dự Án Mới", value: "128", icon: Settings }
];

const chartData = [
  { name: "T1", sales: 4000, views: 2400 },
  { name: "T2", sales: 3000, views: 1398 },
  { name: "T3", sales: 2000, views: 9800 },
  { name: "T4", sales: 2780, views: 3908 },
  { name: "T5", sales: 1890, views: 4800 },
  { name: "T6", sales: 2390, views: 3800 }
];

const headerTool = [
  {
    id: 0,
    name: "Dashboard",
    link: '/admin/dashboard'
  },
  {
    id: 1,
    name: "Trang chủ",
    link: '/'
  },
  {
    id: 2,
    name: "Dự án",
    link: '/admin/dashboard'
  },
  {
    id: 3,
    name: "Khách hàng",
    link: '/admin/dashboard'
  },
  {
    id: 4,
    name: "Giao dịch",
    link: '/admin/dashboard'
  },
  {
    id: 5,
    name: "Cài đặt",
    link: '/admin/dashboard'
  },
]

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      const aiMessage: Message = {
        role: "assistant",
        content: data.reply || "AI không có phản hồi"
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Lỗi kết nối AI" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-100 to-gray-200">
      <header className="h-16 bg-white shadow flex items-center justify-between px-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          🏢 Admin Real Estate
        </h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Tìm kiếm dự án, khách hàng..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 w-64 rounded-xl"
            />
          </div>
          <Bell className="cursor-pointer" />
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-white shadow-lg p-4 flex flex-col gap-2">
          {headerTool.map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-full text-left px-4 py-2 cursor-pointer rounded-xl hover:bg-gray-100"
            >
              <div onClick={()=>router.push(item?.link)}>
                {item?.name}
              </div>
            </motion.button>
          ))}
        </aside>
        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-xl">
                  <CardContent className="p-4 flex items-center gap-4">
                    <item.icon className="h-8 w-8 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-4">
                <h2 className="font-semibold mb-2">Doanh thu</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-4">
                <h2 className="font-semibold mb-2">Lượt xem</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 rounded-2xl shadow-xl">
              <CardContent className="p-4 flex flex-col h-[400px]">
                <h2 className="font-semibold mb-2">🤖 AI Chat Bất Động Sản</h2>

                <div className="flex-1 overflow-y-auto space-y-2 bg-gray-50 p-3 rounded-xl">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-xl text-sm ${msg.role === "user"
                        ? "bg-blue-100 self-end"
                        : "bg-white"
                        }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                  {loading && (
                    <div className="text-xs text-gray-400">AI đang trả lời...</div>
                  )}
                </div>

                <div className="mt-2 flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Hỏi AI về thị trường, giá nhà..."
                  />
                  <Button onClick={handleSend}>Gửi</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-4">
                <h2 className="font-semibold mb-3">Hoạt động gần đây</h2>
                <ul className="space-y-2 text-sm">
                  <li>Chưa có hoạt động nào</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <footer className="h-14 bg-white shadow flex items-center justify-center text-sm text-gray-500">
        © 2025 Real Estate Admin By Nguyễn Trung Kiên
      </footer>
    </div>
  );
}
