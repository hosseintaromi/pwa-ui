import ReportModel from '@/models/report.model';

export default interface ReportsModel {
  data: ReportModel[];
  total_price: string;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
  };
}
