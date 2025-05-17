import { groq } from '@/libs/groq';
import { withAuth } from '@/middleware/auth';
import { withDB } from '@/middleware/db';
import { NextResponse } from 'next/server';

const sendMessage = async (request, _context, _user) => {
  try {
    const { content } = await request.json();

    if (!content) {
      if (!content) {
        return NextResponse.json(
          { message: 'All fields are required' },
          { status: 400 }
        );
      }
    }

    const res = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Kamu adalah Chabot AI untuk aplikasi donasi bernama Seikhlasnya, jawab pertanyaan yg hanya berhubungan dengan donasi, jika pertanyaan tidak berkaitan jawab saja "Maaf, pertanyaan anda tidak bisa saya jawab, silahkan tanyakan pertanyaan lain yg berkaitan dengan donasi yaa :D", pertanyaannya adalah: ${content}, berikan response berupa tag html yg rapi supaya enak dibaca`,
        },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const answer =
      res.choices[0]?.message?.content ||
      'Yahh sepertinya bot sedang sibuk, coba lagi nanti yaa';

    return NextResponse.json(
      {
        chatbot: {
          answer,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Send chatbot message handler error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

export const POST = withDB(withAuth(sendMessage, ['user']));
