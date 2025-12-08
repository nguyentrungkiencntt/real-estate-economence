'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const stats = [
  { title: "Tổng Bất Động Sản", value: "12,450" },
  { title: "Đang Giao Dịch", value: "2,345" },
  { title: "Doanh Thu Tháng", value: "₫48.2 Tỷ" },
  { title: "Khách Hàng Mới", value: "1,284" }
];

const chartData = [
  { name: "T1", sales: 4000, views: 2400 },
  { name: "T2", sales: 3000, views: 1398 },
  { name: "T3", sales: 2000, views: 9800 },
  { name: "T4", sales: 2780, views: 3908 },
  { name: "T5", sales: 1890, views: 4800 },
  { name: "T6", sales: 2390, views: 3800 }
];


export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold mb-6"
      >Bảng Điều Khiển Quản Trị</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Doanh Thu Theo Tháng</h2>
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

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Lượt Xem & Quan Tâm</h2>
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
        <Card className="lg:col-span-2 rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">AI Phân Tích Thị Trường</h2>
            <div className="bg-white rounded-xl p-4 h-40 overflow-y-auto border">
              <p>🤖 AI Insight: Giá bất động sản khu vực TP.HCM có xu hướng tăng 8% trong quý tới...</p>
              <p>🤖 AI Insight: Nhu cầu căn hộ chung cư tăng mạnh ở phân khúc trung cấp...</p>
            </div>
            <div className="mt-3 flex gap-2">
              <Button>Phân tích thêm</Button>
              <Button variant="outline">Xuất báo cáo</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Hoạt Động Gần Đây</h2>
            <ul className="space-y-2 text-sm">
              <li>🏡 Thêm dự án mới: Vinhomes Quận 9</li>
              <li>💰 Giao dịch thành công: Căn hộ Q7</li>
              <li>👤 Người dùng mới đăng ký</li>
              <li>📈 Cập nhật giá bán khu vực Thủ Đức</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
