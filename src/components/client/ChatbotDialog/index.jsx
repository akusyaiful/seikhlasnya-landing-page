import BubbleChat from '@/components/common/BubbleChat';
import { chatbotAiServices } from '@/services/client/chatbot-ai';
import { useAuthStore } from '@/store/client/auth';
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  VStack,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { SendIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ChatbotDialog = ({ open, onOpenChange }) => {
  const { user } = useAuthStore((state) => state);

  const { mutateAsync: sendMessage, isPending: isLoadingSendMessage } =
    useMutation({
      mutationFn: (payload) => chatbotAiServices.sendMessage(payload),
      onSuccess: async (res) => {
        const answer = res?.data?.chatbot?.answer;
        setMessages([
          ...messages,
          {
            type: 'system',
            content: answer,
          },
        ]);
      },
    });

  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: `<p>Hi ${user?.fullName?.split(' ')?.[0]}, ada yg bisa aku bantu?</p>`,
    },
  ]);

  const [message, setMessage] = useState('');
  const bottomRef = useRef(null);

  const handleSendMessage = () => {
    setMessage('');
    setMessages([
      ...messages,
      {
        type: 'user',
        content: message,
      },
    ]);
    sendMessage({
      content: message,
    });
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Dialog.Root
      trapFocus={false}
      open={open}
      placement={'top'}
      onOpenChange={(event) => onOpenChange(event)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius={16}
            overflow={'hidden'}
            maxWidth={{ base: '90vw', md: '550px' }}
          >
            <Dialog.Header
              bgGradient="to-tl"
              gradientFrom="brand.blueLighter"
              gradientTo="brand.blueDarker"
              display={'flex'}
              justifyContent={'center'}
            >
              <Dialog.Title color="brand.white">Seikhlasnya AI</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body px={0}>
              <VStack
                gap={4}
                mt={4}
                w="full"
                h="55vh"
                px={4}
                overflowY="scroll"
              >
                {messages?.map((message, index) => (
                  <BubbleChat
                    key={message.content + index}
                    content={message.content}
                    type={message.type}
                  />
                ))}
                <Box mt={4} w="full" animation="pulse" display="flex">
                  {isLoadingSendMessage && (
                    <BubbleChat content={'<h4>...</h4>'} type={'system'} />
                  )}
                </Box>

                <div ref={bottomRef} />
              </VStack>
            </Dialog.Body>
            <Dialog.Footer display={'flex'} mb={2}>
              <Input
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && message) {
                    handleSendMessage();
                  }
                }}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                w="full"
                placeholder="Masukan pertanyaan"
              />
              <Button
                w="40px"
                h="40px"
                disabled={!message}
                colorPalette={'brand.blue'}
                borderRadius={'full'}
                onClick={handleSendMessage}
                loading={isLoadingSendMessage}
              >
                <SendIcon />
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                mt={1}
                variant={'plain'}
                colorPalette="brand.white"
                size="lg"
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ChatbotDialog;
