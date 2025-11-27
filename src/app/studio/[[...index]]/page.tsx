"use client";

import { NextStudio } from "next-sanity/studio";
// We need to import the config file from the ROOT of the project
// Since we are 4 folders deep (src/app/studio/[[...index]]), we go up 4 times.
import config from "../../../../sanity.config";

export default function StudioPage() {
    return <NextStudio config={config} />;
}