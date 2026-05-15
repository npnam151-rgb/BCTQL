export type ItemType = 'text';

export interface ChecklistItemDef {
  id: number;
  title: string;
  category: string;
  placeholder: string;
  example: string;
}

export interface ReportItem {
  id: number;
  value: string;
}

export interface ReportData {
  date: string;
  reporter: string;
  location: string;
  items: ReportItem[];
}

export const CHECKLIST_ITEMS: ChecklistItemDef[] = [
  { id: 1, category: 'Khách hàng & Doanh thu', title: 'Lượng khách và DT', placeholder: 'Ghi số lượng khách và doanh thu ước tính', example: 'Khách đông, DT khoảng 20tr' },
  { id: 2, category: 'Khách hàng & Doanh thu', title: 'VĐ về Khách hàng', placeholder: 'Các vấn đề liên quan đến khách hàng (phàn nàn, góp ý...)', example: 'Khách phàn nàn thiếu chỗ để xe' },
  { id: 3, category: 'Đồ ăn & Thức uống', title: 'VĐ về Món ăn', placeholder: 'Chất lượng món ăn, tốc độ ra đồ, phản hồi của khách', example: 'Lên đồ hơi chậm lúc 20h' },
  { id: 4, category: 'Đồ ăn & Thức uống', title: 'VĐ về Bia', placeholder: 'Chất lượng bia, nhiệt độ, bọt...', example: 'Bia lạnh, bọt đẹp' },
  { id: 5, category: 'Vận hành (Bar/Bàn)', title: 'Nhân sự (Bar/Bàn)', placeholder: 'Tình hình nhân sự, thái độ, kỹ năng...', example: 'Thiếu 1 bạn chạy bàn ca tối' },
  { id: 6, category: 'Vận hành (Bar/Bàn)', title: 'Bảo trì, sửa chữa', placeholder: 'Tình trạng máy móc, trang thiết bị...', example: 'Hỏng vòi nước bồn rửa ly' },
  { id: 7, category: 'Bếp', title: 'Nhân sự (Bếp)', placeholder: 'Tình hình nhân sự khu bếp', example: 'Đủ 3 phụ bếp' },
  { id: 8, category: 'Bếp', title: 'Các vđ về bếp', placeholder: 'Tình hình vệ sinh, nhập hàng, hao hụt...', example: 'Thiếu khay đựng đá cục' },
  { id: 9, category: 'Sự kiện khác', title: 'Đối ngoại CQ', placeholder: 'Cơ quan chức năng kiểm tra...', example: 'Không có' },
  { id: 10, category: 'Sự kiện khác', title: 'Phát sinh bất thường', placeholder: 'Tình huống đánh nhau, hỏng hóc lớn...', example: 'Khách làm vỡ 1 cốc bia' },
  { id: 11, category: 'Sự kiện khác', title: 'Ý kiến/ Đề xuất', placeholder: 'Ghi nhận đề xuất cải thiện', example: 'Đề xuất mua thêm cây lau sàn' },
];