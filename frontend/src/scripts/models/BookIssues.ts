export default interface BookIssues{
  id: number;
  userId: number;
  bookCopyId: number;
  issueDate: Date;
  dueDate: Date;
  returnDate: Date;
  fineAmount: number;
  totalCharges: number;
  rentalAmount:number;
  rentalPaymentStatus: number;
  status: string;
}