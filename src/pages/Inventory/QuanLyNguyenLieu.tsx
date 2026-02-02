"use client";

import { useState, useRef, useEffect } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { showToast } from "../../components/common/Toast";
import { showConfirm } from "../../components/common/ConfirmDialog";

interface Material {
  id: string;
  maHang: string;
  tenHang: string;
  danhMuc: string;
  donVi: string;
  soLuongTon: number;
  donGiaNhap: number;
  donGiaXuat: number;
  nhaCungCapChinh: string;
  moTa: string;
  hinhAnh?: string;
  ngayTao: string;
}

// Dropdown Action Component
const ActionDropdown = ({ 
  onView, 
  onEdit, 
  onDelete 
}: { 
  onView: () => void; 
  onEdit: () => void; 
  onDelete: () => void; 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          <button
            onClick={() => { onView(); setIsOpen(false); }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Xem chi tiết
          </button>
          <button
            onClick={() => { onEdit(); setIsOpen(false); }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Chỉnh sửa
          </button>
          <button
            onClick={() => { onDelete(); setIsOpen(false); }}
            className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Xóa
          </button>
        </div>
      )}
    </div>
  );
};

export default function QuanLyNguyenLieu() {
  const [materials, setMaterials] = useState<Material[]>([
    {
      id: "1",
      maHang: "NL001",
      tenHang: "Bột mỳ cao cấp",
      danhMuc: "Nguyên liệu chính",
      donVi: "kg",
      soLuongTon: 150,
      donGiaNhap: 45000,
      donGiaXuat: 55000,
      nhaCungCapChinh: "Công ty TNHH ABC",
      moTa: "Bột mỳ loại 1 nhập khẩu",
      ngayTao: "2026-01-15",
    },
    {
      id: "2",
      maHang: "NL002",
      tenHang: "Đường tinh luyện",
      danhMuc: "Nguyên liệu phụ",
      donVi: "kg",
      soLuongTon: 80,
      donGiaNhap: 25000,
      donGiaXuat: 32000,
      nhaCungCapChinh: "Đường Biên Hòa",
      moTa: "Đường RE cao cấp",
      ngayTao: "2026-01-18",
    },
    {
      id: "3",
      maHang: "NL003",
      tenHang: "Bơ lạt Anchor",
      danhMuc: "Nguyên liệu chính",
      donVi: "kg",
      soLuongTon: 25,
      donGiaNhap: 180000,
      donGiaXuat: 220000,
      nhaCungCapChinh: "Metro Cash & Carry",
      moTa: "Bơ lạt New Zealand",
      ngayTao: "2026-01-20",
    },
    {
      id: "4",
      maHang: "NL004",
      tenHang: "Trứng gà tươi",
      danhMuc: "Nguyên liệu tươi",
      donVi: "quả",
      soLuongTon: 500,
      donGiaNhap: 3500,
      donGiaXuat: 4500,
      nhaCungCapChinh: "Trang trại Ba Huân",
      moTa: "Trứng gà ta sạch",
      ngayTao: "2026-01-22",
    },
    {
      id: "5",
      maHang: "NL005",
      tenHang: "Sữa tươi Vinamilk",
      danhMuc: "Nguyên liệu tươi",
      donVi: "lít",
      soLuongTon: 8,
      donGiaNhap: 32000,
      donGiaXuat: 40000,
      nhaCungCapChinh: "Vinamilk",
      moTa: "Sữa tươi không đường",
      ngayTao: "2026-01-25",
    },
    {
      id: "6",
      maHang: "NL006",
      tenHang: "Chocolate Callebaut",
      danhMuc: "Nguyên liệu cao cấp",
      donVi: "kg",
      soLuongTon: 0,
      donGiaNhap: 450000,
      donGiaXuat: 550000,
      nhaCungCapChinh: "Belgium Import Co.",
      moTa: "Chocolate Bỉ 70% cacao",
      ngayTao: "2026-01-28",
    },
    {
      id: "7",
      maHang: "NL007",
      tenHang: "Vani Madagascar",
      danhMuc: "Hương liệu",
      donVi: "ml",
      soLuongTon: 200,
      donGiaNhap: 85000,
      donGiaXuat: 120000,
      nhaCungCapChinh: "Spice World",
      moTa: "Tinh chất vani nguyên chất",
      ngayTao: "2026-01-30",
    },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sorting state
  const [sortField, setSortField] = useState<keyof Material | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [view, setView] = useState<"list" | "create" | "edit" | "detail">(
    "list"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{ danhMuc: string[]; nhaCungCapChinh: string[] }>({
    danhMuc: [],
    nhaCungCapChinh: [],
  });
  const [filterSearch, setFilterSearch] = useState({ danhMuc: "", nhaCungCapChinh: "" });
  const [formData, setFormData] = useState({
    maHang: "",
    tenHang: "",
    danhMuc: "Nguyên liệu chính",
    donVi: "kg",
    soLuongTon: "",
    donGiaNhap: "",
    donGiaXuat: "",
    nhaCungCapChinh: "",
    moTa: "",
  });

  // Handle sorting
  const handleSort = (field: keyof Material) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedItems.length === paginatedMaterials.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedMaterials.map(m => m.id));
    }
  };

  // Handle select item
  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      maHang: "",
      tenHang: "",
      danhMuc: "Nguyên liệu chính",
      donVi: "kg",
      soLuongTon: "",
      donGiaNhap: "",
      donGiaXuat: "",
      nhaCungCapChinh: "",
      moTa: "",
    });
  };

  // Handle form change
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save material
  const handleSaveMaterial = () => {
    if (!formData.maHang || !formData.tenHang) {
      showToast("Vui lòng điền đầy đủ thông tin!", "warning");
      return;
    }

    if (view === "create") {
      const newMaterial: Material = {
        id: Date.now().toString(),
        maHang: formData.maHang,
        tenHang: formData.tenHang,
        danhMuc: formData.danhMuc,
        donVi: formData.donVi,
        soLuongTon: parseFloat(formData.soLuongTon) || 0,
        donGiaNhap: parseFloat(formData.donGiaNhap) || 0,
        donGiaXuat: parseFloat(formData.donGiaXuat) || 0,
        nhaCungCapChinh: formData.nhaCungCapChinh,
        moTa: formData.moTa,
        ngayTao: new Date().toISOString().split("T")[0],
      };
      setMaterials([...materials, newMaterial]);
      showToast("Nguyên liệu đã được tạo thành công!", "success");
    } else if (view === "edit" && selectedMaterial) {
      setMaterials(
        materials.map((m) =>
          m.id === selectedMaterial.id
            ? {
                ...m,
                maHang: formData.maHang,
                tenHang: formData.tenHang,
                danhMuc: formData.danhMuc,
                donVi: formData.donVi,
                soLuongTon: parseFloat(formData.soLuongTon) || 0,
                donGiaNhap: parseFloat(formData.donGiaNhap) || 0,
                donGiaXuat: parseFloat(formData.donGiaXuat) || 0,
                nhaCungCapChinh: formData.nhaCungCapChinh,
                moTa: formData.moTa,
              }
            : m
        )
      );
      showToast("Nguyên liệu đã được cập nhật!", "success");
    }

    resetForm();
    setView("list");
  };

  // Delete material
  const handleDeleteMaterial = (id: string) => {
    showConfirm({
      message: "Bạn có chắc chắn muốn xóa nguyên liệu này?",
      okText: "Xóa",
      cancelText: "Hủy",
      onConfirm: () => {
        setMaterials(materials.filter((m) => m.id !== id));
        showToast("Nguyên liệu đã được xóa!", "success");
      },
    });
  };

  // Edit material
  const handleEditMaterial = (material: Material) => {
    setSelectedMaterial(material);
    setFormData({
      maHang: material.maHang,
      tenHang: material.tenHang,
      danhMuc: material.danhMuc,
      donVi: material.donVi,
      soLuongTon: material.soLuongTon.toString(),
      donGiaNhap: material.donGiaNhap.toString(),
      donGiaXuat: material.donGiaXuat.toString(),
      nhaCungCapChinh: material.nhaCungCapChinh,
      moTa: material.moTa,
    });
    setView("edit");
  };

  // View detail
  const handleViewDetail = (material: Material) => {
    setSelectedMaterial(material);
    setView("detail");
  };

  // Filter and sort materials
  const filteredMaterials = materials
    .filter((material) =>
      searchTerm.toLowerCase() === ""
        ? true
        : material.maHang.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.tenHang.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.nhaCungCapChinh.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" 
          ? aVal.localeCompare(bVal) 
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredMaterials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMaterials = filteredMaterials.slice(startIndex, startIndex + itemsPerPage);

  // Sort icon component
  const SortIcon = ({ field }: { field: keyof Material }) => (
    <span className="inline-flex flex-col ml-1">
      <svg 
        className={`w-3 h-3 ${sortField === field && sortDirection === "asc" ? "text-blue-600" : "text-gray-400"}`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M7 14l5-5 5 5H7z" />
      </svg>
      <svg 
        className={`w-3 h-3 -mt-1 ${sortField === field && sortDirection === "desc" ? "text-blue-600" : "text-gray-400"}`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </span>
  );

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  // Get stock status
  const getStockStatus = (quantity: number) => {
    if (quantity === 0) {
      return { text: "Hết hàng", class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" };
    } else if (quantity <= 20) {
      return { text: "Sắp hết", class: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" };
    }
    return { text: "Còn hàng", class: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Nguyên liệu chính": "from-blue-500 to-blue-600",
      "Nguyên liệu phụ": "from-purple-500 to-purple-600",
      "Nguyên liệu tươi": "from-green-500 to-green-600",
      "Nguyên liệu cao cấp": "from-amber-500 to-amber-600",
      "Hương liệu": "from-pink-500 to-pink-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <>
      <PageMeta title="Quản Lý Nguyên Liệu" description="Quản Lý Nguyên Liệu" />
      <PageBreadcrumb pageTitle="Quản Lý Nguyên Liệu" />

      {view === "list" && (
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          {/* Header Section */}
          <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Danh Sách Nguyên Liệu
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Quản lý kho nguyên liệu và theo dõi tồn kho của bạn.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {}}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export
                </button>
                <button
                  onClick={() => {
                    resetForm();
                    setView("create");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Thêm Nguyên Liệu
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800 overflow-visible">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-72">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-gray-600 transition-all duration-200"
                />
              </div>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Bộ lọc
                </button>

                {isFilterOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsFilterOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl z-50 p-4">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Danh Mục
                          </label>
                          <input
                            type="text"
                            placeholder="Tìm danh mục..."
                            value={filterSearch.danhMuc}
                            onChange={(e) => setFilterSearch({ ...filterSearch, danhMuc: e.target.value })}
                            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                          />
                          <div className="max-h-32 overflow-y-auto space-y-1">
                            {[...new Set(materials.map(m => m.danhMuc))]
                              .filter(dm => dm.toLowerCase().includes(filterSearch.danhMuc.toLowerCase()))
                              .map(dm => (
                                <label key={dm} className="flex items-center gap-2 p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={filters.danhMuc.includes(dm)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFilters({ ...filters, danhMuc: [...filters.danhMuc, dm] });
                                      } else {
                                        setFilters({ ...filters, danhMuc: filters.danhMuc.filter(d => d !== dm) });
                                      }
                                    }}
                                    className="rounded"
                                  />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{dm}</span>
                                </label>
                              ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Nhà Cung Cấp
                          </label>
                          <input
                            type="text"
                            placeholder="Tìm NCC..."
                            value={filterSearch.nhaCungCapChinh}
                            onChange={(e) => setFilterSearch({ ...filterSearch, nhaCungCapChinh: e.target.value })}
                            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                          />
                          <div className="max-h-32 overflow-y-auto space-y-1">
                            {[...new Set(materials.map(m => m.nhaCungCapChinh))]
                              .filter(ncc => ncc.toLowerCase().includes(filterSearch.nhaCungCapChinh.toLowerCase()))
                              .map(ncc => (
                                <label key={ncc} className="flex items-center gap-2 p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={filters.nhaCungCapChinh.includes(ncc)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFilters({ ...filters, nhaCungCapChinh: [...filters.nhaCungCapChinh, ncc] });
                                      } else {
                                        setFilters({ ...filters, nhaCungCapChinh: filters.nhaCungCapChinh.filter(n => n !== ncc) });
                                      }
                                    }}
                                    className="rounded"
                                  />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{ncc}</span>
                                </label>
                              ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setIsFilterOpen(false)}
                          className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="px-5 py-4 text-left">
                    <input 
                      type="checkbox" 
                      checked={selectedItems.length === paginatedMaterials.length && paginatedMaterials.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </th>
                  <th className="px-5 py-4 text-left">
                    <button 
                      onClick={() => handleSort("tenHang")}
                      className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      Nguyên Liệu
                      <SortIcon field="tenHang" />
                    </button>
                  </th>
                  <th className="px-5 py-4 text-left">
                    <button 
                      onClick={() => handleSort("danhMuc")}
                      className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      Danh Mục
                      <SortIcon field="danhMuc" />
                    </button>
                  </th>
                  <th className="px-5 py-4 text-left">
                    <button 
                      onClick={() => handleSort("nhaCungCapChinh")}
                      className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      NCC
                      <SortIcon field="nhaCungCapChinh" />
                    </button>
                  </th>
                  <th className="px-5 py-4 text-left">
                    <button 
                      onClick={() => handleSort("donGiaNhap")}
                      className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      Đơn Giá
                      <SortIcon field="donGiaNhap" />
                    </button>
                  </th>
                  <th className="px-5 py-4 text-left">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Tồn Kho
                    </span>
                  </th>
                  <th className="px-5 py-4 text-left">
                    <button 
                      onClick={() => handleSort("ngayTao")}
                      className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      Ngày Tạo
                      <SortIcon field="ngayTao" />
                    </button>
                  </th>
                  <th className="px-5 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {paginatedMaterials.map((material) => {
                  const stockStatus = getStockStatus(material.soLuongTon);
                  return (
                    <tr 
                      key={material.id} 
                      className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-5 py-4">
                        <input 
                          type="checkbox" 
                          checked={selectedItems.includes(material.id)}
                          onChange={() => handleSelectItem(material.id)}
                          className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                        />
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(material.danhMuc)} flex items-center justify-center text-white font-semibold text-xs shadow-sm`}>
                            {material.maHang.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {material.tenHang}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {material.maHang}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {material.danhMuc}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {material.nhaCungCapChinh}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {formatCurrency(material.donGiaNhap)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${stockStatus.class}`}>
                          {stockStatus.text}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(material.ngayTao)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <ActionDropdown
                          onView={() => handleViewDetail(material)}
                          onEdit={() => handleEditMaterial(material)}
                          onDelete={() => handleDeleteMaterial(material.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredMaterials.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Không tìm thấy nguyên liệu
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hãy thử thay đổi từ khóa tìm kiếm hoặc thêm nguyên liệu mới.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredMaterials.length > 0 && (
            <div className="px-5 lg:px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hiển thị <span className="font-medium text-gray-900 dark:text-white">{startIndex + 1}</span> đến <span className="font-medium text-gray-900 dark:text-white">{Math.min(startIndex + itemsPerPage, filteredMaterials.length)}</span> của <span className="font-medium text-gray-900 dark:text-white">{filteredMaterials.length}</span>
              </p>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {(view === "create" || view === "edit") && (
        <div className="space-y-6">
          {/* Back button */}
          <button
            onClick={() => {
              resetForm();
              setView("list");
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </button>

          {/* Form Card */}
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {view === "create" ? "Thêm Nguyên Liệu Mới" : "Chỉnh Sửa Nguyên Liệu"}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {view === "create" ? "Điền thông tin để thêm nguyên liệu mới vào kho." : "Cập nhật thông tin nguyên liệu."}
              </p>
            </div>

            <div className="p-5 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mã Hàng <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="maHang"
                    value={formData.maHang}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: NL001"
                    disabled={view === "edit"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tên Nguyên Liệu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tenHang"
                    value={formData.tenHang}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: Bột mỳ cao cấp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Danh Mục
                  </label>
                  <select
                    name="danhMuc"
                    value={formData.danhMuc}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  >
                    <option>Nguyên liệu chính</option>
                    <option>Nguyên liệu phụ</option>
                    <option>Nguyên liệu tươi</option>
                    <option>Nguyên liệu cao cấp</option>
                    <option>Hương liệu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Đơn Vị
                  </label>
                  <select
                    name="donVi"
                    value={formData.donVi}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="kg">Kilogram (kg)</option>
                    <option value="g">Gram (g)</option>
                    <option value="lít">Lít</option>
                    <option value="ml">Millilít (ml)</option>
                    <option value="quả">Quả</option>
                    <option value="cái">Cái</option>
                    <option value="hộp">Hộp</option>
                    <option value="thùng">Thùng</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Số Lượng Tồn
                  </label>
                  <input
                    type="number"
                    name="soLuongTon"
                    value={formData.soLuongTon}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Đơn Giá Nhập (VNĐ)
                  </label>
                  <input
                    type="number"
                    name="donGiaNhap"
                    value={formData.donGiaNhap}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Đơn Giá Xuất (VNĐ)
                  </label>
                  <input
                    type="number"
                    name="donGiaXuat"
                    value={formData.donGiaXuat}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nhà Cung Cấp Chính
                  </label>
                  <input
                    type="text"
                    name="nhaCungCapChinh"
                    value={formData.nhaCungCapChinh}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: Công ty TNHH ABC"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mô Tả
                  </label>
                  <textarea
                    name="moTa"
                    value={formData.moTa}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Mô tả chi tiết về nguyên liệu..."
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-5 lg:px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  resetForm();
                  setView("list");
                }}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveMaterial}
                className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                {view === "create" ? "Thêm Nguyên Liệu" : "Lưu Thay Đổi"}
              </button>
            </div>
          </div>
        </div>
      )}

      {view === "detail" && selectedMaterial && (
        <div className="space-y-6">
          {/* Back button */}
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </button>

          {/* Detail Card */}
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            {/* Header */}
            <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCategoryColor(selectedMaterial.danhMuc)} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {selectedMaterial.maHang.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedMaterial.tenHang}
                    </h2>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStockStatus(selectedMaterial.soLuongTon).class}`}>
                      {getStockStatus(selectedMaterial.soLuongTon).text}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mã: {selectedMaterial.maHang} • {selectedMaterial.danhMuc}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditMaterial(selectedMaterial)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    onClick={() => handleDeleteMaterial(selectedMaterial.id)}
                    className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Số Lượng Tồn Kho
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedMaterial.soLuongTon} <span className="text-sm font-normal text-gray-500">{selectedMaterial.donVi}</span>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Đơn Giá Nhập
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(selectedMaterial.donGiaNhap)}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Đơn Giá Xuất
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(selectedMaterial.donGiaXuat)}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20">
                  <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">
                    Lợi Nhuận / Đơn Vị
                  </p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(selectedMaterial.donGiaXuat - selectedMaterial.donGiaNhap)}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    Giá Trị Tồn Kho
                  </p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatCurrency(selectedMaterial.soLuongTon * selectedMaterial.donGiaNhap)}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Ngày Tạo
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formatDate(selectedMaterial.ngayTao)}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Nhà Cung Cấp Chính
                    </p>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold text-sm">
                        {selectedMaterial.nhaCungCapChinh.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedMaterial.nhaCungCapChinh}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Mô Tả
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      {selectedMaterial.moTa || "Chưa có mô tả cho nguyên liệu này."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
