import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/chatbot-ai';

export const chatbotAiServices = {
  sendMessage: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/send-message`, payload);
    return res;
  },
};

export const CHATBOT_AI_QUERY_KEYS = {};
