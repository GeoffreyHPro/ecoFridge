import { SafeUrl } from "@angular/platform-browser";

export interface Food {
    idFood: Number;
    bareCode: String;
    image: String;
    name: string;
    description: string;
    safeImageURL: SafeUrl;
}