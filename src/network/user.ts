import {
  ResponseWithLoan,
  ResponseWithTransactions,
  ResponseWithUser,
} from "../types/network-response";
import {
  NewLoanRequestPayload,
  UpdateLoanStatusPayload,
} from "../types/payloads";
import { instance } from "./axios";

// API call to get user data
export const getUserData = async (userId: number) => {
  const response = await instance.get(`/users/${userId.toString()}`);
  return response; 
};


export const getUserTransactions = async (userId: number) => {
  const { data } = await instance.get<ResponseWithTransactions>(
    `/transactions?userId=${userId}`
  );
  return data;
};

// API call to get loans for a user
export const getUserLoans = async (userId: number) => {
  const { data } = await instance.get<ResponseWithLoan>(
    `/loans?userId=${userId}`
  );
  return data;
};

export const updateUserRecentTransactions = async (userId: number) => {
  const { data } = await instance.post<ResponseWithTransactions>(
    `/users?userId=${userId}`
  );
  return data;
};


export const requestNewLoan = async (
  userId: number,
  loanData: NewLoanRequestPayload
) => {
  const { data } = await instance.post("/loans", {
    userId,
    loanAmount: loanData.loanAmount,
    tenure: loanData.tenure,
    purpose: loanData.purpose,
    status: "pending", 
    startDate: new Date().toISOString(),
    endDate: new Date(
      new Date().setMonth(new Date().getMonth() + loanData.tenure)
    ).toISOString(),
  });
  return data;
};

// API call to update loan status (e.g., when it's paid off)
export const updateLoanStatus = async (
  loanId: number,
  payload: UpdateLoanStatusPayload
) => {
  const { data } = await instance.put(`/loans/${loanId}`, payload);
  return data;
};
