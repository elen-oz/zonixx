import Link from 'next/link';
import {Button} from "@nextui-org/react";

export default function NotFound() {
    return (
        <div className="h-[500px] md:h-[600px]">
            <div className="flex h-full flex-col items-center justify-center gap-2">
                <h2 className="text-4xl md:text-6xl font-bold">404 Not Found</h2>
                <p>The page you are looking for does not exist.</p>

                <p className='text-xl md:text-2xl'>Let&#x27;s start again?</p>
                <Button radius="none" variant="ghost">
                    <Link
                        href="/"

                    >
                        Yes, please
                    </Link>
                </Button>
            </div>
        </div>
    );
}