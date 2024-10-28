import { getMarkdownContent } from "@/app/utils/mdutils";

export default async function CalculatorPage() {
    const { contentHtml } = await getMarkdownContent('instructions.md');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Calculator App</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <div
                    className="prose lg:prose-xl"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Calculator</h2>
            </div>
        </div>
    );
}