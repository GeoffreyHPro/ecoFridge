import { SafeUrl } from "@angular/platform-browser";

export interface Food {
    idFood: Number;
    bareCode: string;
    image: string;
    name: string;
    description: string;
    safeImageURL: SafeUrl;
}