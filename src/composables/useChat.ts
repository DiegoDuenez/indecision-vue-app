import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";


export const useChat = () => {
    
    const messages =  ref<ChatMessage[]>([
    {
        id: 1,
        message: 'Hola',
        itsMine: true
    },
    {
        id: 2,
        message: 'Si',
        itsMine: false
    }
    ]);

    const getFriendResponse =  async() => {
        const resp = await fetch('https://yes-no-wtf.vercel.app/api')

        const data = (await resp.json()) as YesNoResponse;
        
        return data;
    }

    const onMessage = async(text: string) => {
        if(text.length === 0) return;
        messages.value.push({
            id: new Date().getTime(),
            message: text,
            itsMine: true
        });

        if (!text.endsWith('?')) return;

        await sleep(2);

        const {answer, image} = await getFriendResponse();

        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine: false,
            image: image
        });
    }

    return {
        messages,
        onMessage
    }

}