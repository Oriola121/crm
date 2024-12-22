import { Separator } from '@crm/components/ui/separator';
import { PropsWithChildren } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import AppSidebar from './app-sidebar';
import { ScrollArea } from '@crm/components/ui/scroll-area';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <header className='w-full h-[10vh] p-4 bg-[#0F172A] text-[#E4E7EC] flex items-center gap-4'>
                <CgMenuGridO size={28} />
                <div className='flex items-center gap-2'>
                    <span><strong>Dynamics 365</strong></span>
                    <Separator orientation='vertical' className='h-3 w-[1px] bg-[#4B5563]' />
                    <span className='text-sm'>Sales hub</span>
                </div>
            </header>

            <section className="flex h-[90vh] bg-[#E4E7EC]">
                <AppSidebar />
                <ScrollArea className="h-full w-full bg-[#FFFFFF80]">
                    {children}
                </ScrollArea>
            </section>
        </div>
    );
}