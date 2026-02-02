"use client";

import { useState, useRef, useEffect } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { showToast } from "../../components/common/Toast";
import { showConfirm } from "../../components/common/ConfirmDialog";

interface Supplier {
  id: string;
  tenNCC: string;
  diaChiNCC: string;
  sdtNCC: string;
  emailNCC: string;
  nguoiLienHe: string;
  dieuKienThanhToan: string;
  moTa: string;
  ngayTao: string;
  trangThai: "Hoạt động" | "Vô hiệu hóa";
}

// Dropdown Action Component
const ActionDropdown = ({ 
  supplier, 
  onView, 
  onEdit, 
  onDelete 
}: { 
  supplier: Supplier; 
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

export default function QuanLyNhaCungCap() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      id: "1",
      tenNCC: "Công ty TNHH ABC",
      diaChiNCC: "123 Đường Lê Lợi, TP HCM",
      sdtNCC: "0287654321",
      emailNCC: "contact@abc.com.vn",
      nguoiLienHe: "Nguyễn Văn A",
      dieuKienThanhToan: "Thanh toán 30 ngày",
      moTa: "Cung cấp bột mỳ và lương khô",
      ngayTao: "2025-01-10",
      trangThai: "Hoạt động",
    },
    {
      id: "2",
      tenNCC: "Công ty XYZ",
      diaChiNCC: "456 Đường Huyền Trân Côn Công, Quận 1, TP HCM",
      sdtNCC: "0298765432",
      emailNCC: "sales@xyz.vn",
      nguoiLienHe: "Trần Thị B",
      dieuKienThanhToan: "Thanh toán 15 ngày",
      moTa: "Cung cấp các nguyên liệu tươi",
      ngayTao: "2025-01-15",
      trangThai: "Hoạt động",
    },
    {
      id: "3",
      tenNCC: "Metro Cash & Carry",
      diaChiNCC: "789 Đường Võ Văn Kiệt, Quận 5, TP HCM",
      sdtNCC: "0278901234",
      emailNCC: "procurement@metro.vn",
      nguoiLienHe: "Lê Văn C",
      dieuKienThanhToan: "Thanh toán ngay",
      moTa: "Cung cấp các mặt hàng buôn bán",
      ngayTao: "2025-01-20",
      trangThai: "Hoạt động",
    },
  ]);

  const [view, setView] = useState<"list" | "create" | "edit" | "detail">("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{ trangThai: string[] }>({
    trangThai: [],
  });
  const [formData, setFormData] = useState({
    tenNCC: "",
    diaChiNCC: "",
    sdtNCC: "",
    emailNCC: "",
    nguoiLienHe: "",
    dieuKienThanhToan: "",
    moTa: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSelectAll = () => {
    if (selectedItems.length === paginatedSuppliers.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedSuppliers.map(s => s.id));
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const resetForm = () => {
    setFormData({
      tenNCC: "",
      diaChiNCC: "",
      sdtNCC: "",
      emailNCC: "",
      nguoiLienHe: "",
      dieuKienThanhToan: "",
      moTa: "",
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveSupplier = () => {
    if (!formData.tenNCC || !formData.sdtNCC) {
      showToast("Vui lòng điền đầy đủ thông tin!", "warning");
      return;
    }

    if (view === "create") {
      const newSupplier: Supplier = {
        id: Date.now().toString(),
        tenNCC: formData.tenNCC,
        diaChiNCC: formData.diaChiNCC,
        sdtNCC: formData.sdtNCC,
        emailNCC: formData.emailNCC,
        nguoiLienHe: formData.nguoiLienHe,
        dieuKienThanhToan: formData.dieuKienThanhToan,
        moTa: formData.moTa,
        ngayTao: new Date().toISOString().split("T")[0],
        trangThai: "Hoạt động",
      };
      setSuppliers([...suppliers, newSupplier]);
      showToast("Nhà cung cấp đã được tạo thành công!", "success");
    } else if (view === "edit" && selectedSupplier) {
      setSuppliers(
        suppliers.map((s) =>
          s.id === selectedSupplier.id
            ? {
                ...s,
                tenNCC: formData.tenNCC,
                diaChiNCC: formData.diaChiNCC,
                sdtNCC: formData.sdtNCC,
                emailNCC: formData.emailNCC,
                nguoiLienHe: formData.nguoiLienHe,
                dieuKienThanhToan: formData.dieuKienThanhToan,
                moTa: formData.moTa,
              }
            : s
        )
      );
      showToast("Nhà cung cấp đã được cập nhật!", "success");
    }

    resetForm();
    setView("list");
  };

  const handleDeleteSupplier = (id: string) => {
    showConfirm({
      message: "Bạn có chắc chắn muốn xóa nhà cung cấp này?",
      okText: "Xóa",
      cancelText: "Hủy",
      onConfirm: () => {
        setSuppliers(suppliers.filter((s) => s.id !== id));
        showToast("Nhà cung cấp đã được xóa!", "success");
      },
    });
  };

  const handleEditSupplier = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setFormData({
      tenNCC: supplier.tenNCC,
      diaChiNCC: supplier.diaChiNCC,
      sdtNCC: supplier.sdtNCC,
      emailNCC: supplier.emailNCC,
      nguoiLienHe: supplier.nguoiLienHe,
      dieuKienThanhToan: supplier.dieuKienThanhToan,
      moTa: supplier.moTa,
    });
    setView("edit");
  };

  const handleViewDetail = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setView("detail");
  };

  const handleToggleStatus = (id: string) => {
    setSuppliers(
      suppliers.map((s) =>
        s.id === id
          ? {
              ...s,
              trangThai: s.trangThai === "Hoạt động" ? "Vô hiệu hóa" : "Hoạt động",
            }
          : s
      )
    );
  };

  const filteredSuppliers = suppliers.filter((supplier) =>
    searchTerm.toLowerCase() === ""
      ? true
      : supplier.tenNCC.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.diaChiNCC.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.sdtNCC.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSuppliers = filteredSuppliers.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <>
      <PageMeta title="Quản Lý Nhà Cung Cấp" description="Quản lý danh sách nhà cung cấp" />
      <PageBreadcrumb pageTitle="Quản Lý Nhà Cung Cấp" />

      {view === "list" && (
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          {/* Header Section */}
          <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Danh Sách Nhà Cung Cấp
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Quản lý danh sách các nhà cung cấp của bạn.
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
                  Thêm NCC
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
                            Trạng Thái
                          </label>
                          <div className="space-y-1">
                            {["Hoạt động", "Ngừng hoạt động"].map(status => (
                              <label key={status} className="flex items-center gap-2 p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={filters.trangThai.includes(status)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFilters({ ...filters, trangThai: [...filters.trangThai, status] });
                                    } else {
                                      setFilters({ ...filters, trangThai: filters.trangThai.filter(s => s !== status) });
                                    }
                                  }}
                                  className="rounded"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{status}</span>
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
                      checked={selectedItems.length === paginatedSuppliers.length && paginatedSuppliers.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tên NCC</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Địa Chỉ</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">SĐT</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trạng Thái</th>
                  <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ngày Tạo</th>
                  <th className="px-5 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {paginatedSuppliers.map((supplier) => (
                  <tr 
                    key={supplier.id} 
                    className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedItems.includes(supplier.id)}
                        onChange={() => handleSelectItem(supplier.id)}
                        className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                      />
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {supplier.tenNCC}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {supplier.diaChiNCC}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {supplier.sdtNCC}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {supplier.emailNCC}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        supplier.trangThai === "Hoạt động"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {supplier.trangThai}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(supplier.ngayTao)}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <ActionDropdown
                        supplier={supplier}
                        onView={() => handleViewDetail(supplier)}
                        onEdit={() => handleEditSupplier(supplier)}
                        onDelete={() => handleDeleteSupplier(supplier.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredSuppliers.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Không tìm thấy nhà cung cấp
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hãy thêm nhà cung cấp mới hoặc thay đổi từ khóa tìm kiếm.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredSuppliers.length > 0 && (
            <div className="px-5 lg:px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hiển thị <span className="font-medium text-gray-900 dark:text-white">{startIndex + 1}</span> đến <span className="font-medium text-gray-900 dark:text-white">{Math.min(startIndex + itemsPerPage, filteredSuppliers.length)}</span> của <span className="font-medium text-gray-900 dark:text-white">{filteredSuppliers.length}</span>
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

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {view === "create" ? "Thêm Nhà Cung Cấp Mới" : "Chỉnh Sửa Nhà Cung Cấp"}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {view === "create" ? "Điền thông tin để thêm nhà cung cấp mới." : "Cập nhật thông tin nhà cung cấp."}
              </p>
            </div>

            <div className="p-5 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tên Nhà Cung Cấp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tenNCC"
                    value={formData.tenNCC}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: Công ty TNHH ABC"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Địa Chỉ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="diaChiNCC"
                    value={formData.diaChiNCC}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: 123 Đường Lê Lợi, TP HCM"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    SĐT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="sdtNCC"
                    value={formData.sdtNCC}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: 0287654321"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="emailNCC"
                    value={formData.emailNCC}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: contact@abc.com.vn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Người Liên Hệ
                  </label>
                  <input
                    type="text"
                    name="nguoiLienHe"
                    value={formData.nguoiLienHe}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Điều Kiện Thanh Toán
                  </label>
                  <input
                    type="text"
                    name="dieuKienThanhToan"
                    value={formData.dieuKienThanhToan}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="VD: Thanh toán 30 ngày"
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
                    placeholder="Mô tả chi tiết về nhà cung cấp..."
                  />
                </div>
              </div>
            </div>

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
                onClick={handleSaveSupplier}
                className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                {view === "create" ? "Thêm NCC" : "Lưu Thay Đổi"}
              </button>
            </div>
          </div>
        </div>
      )}

      {view === "detail" && selectedSupplier && (
        <div className="space-y-6">
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </button>

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="p-5 lg:p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {selectedSupplier.tenNCC.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedSupplier.tenNCC}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {selectedSupplier.diaChiNCC}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditSupplier(selectedSupplier)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    onClick={() => handleDeleteSupplier(selectedSupplier.id)}
                    className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    SĐT
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedSupplier.sdtNCC}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                    {selectedSupplier.emailNCC}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Người Liên Hệ
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedSupplier.nguoiLienHe}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Trạng Thái
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    selectedSupplier.trangThai === "Hoạt động"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {selectedSupplier.trangThai}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    Điều Kiện TT
                  </p>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    {selectedSupplier.dieuKienThanhToan}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Ngày Tạo
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formatDate(selectedSupplier.ngayTao)}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Mô Tả
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    {selectedSupplier.moTa || "Chưa có mô tả cho nhà cung cấp này."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
