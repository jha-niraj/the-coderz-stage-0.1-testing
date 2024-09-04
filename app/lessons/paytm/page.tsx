const { Client } = require('@notionhq/client');

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });

// Define types for Notion blocks
type NotionBlock = {
  id: string;
  type: string;
  paragraph?: {
    rich_text: Array<{ plain_text: string }>;
  };
  // Add other block types as needed
};

export async function getPageContentFromNotion() {
  try {
    const response = await notion.pages.retrieve({
      page_id: 'Paytm-Full-Stack-4d79613eb4f642d49e90f57a01719af1',
    });

    // If your page has a title, you can access it like this:
    const pageTitle = response.properties.title.title[0].plain_text;

    // To get the content of the page, you need to make another API call:
    const blocksResponse = await notion.blocks.children.list({
      block_id: response.id,
    });

    // Process the blocks to extract text content
    const pageContent = blocksResponse.results.map((block: NotionBlock) => {
      if (block.type === 'paragraph' && block.paragraph) {
        return block.paragraph.rich_text.map(text => text.plain_text).join('');
      }
      // Handle other block types as needed
      return '';
    }).join('\n');
    
    return { title: pageTitle, content: pageContent };
  } catch (error) {
    console.error('Error fetching data from Notion:', error);
    return null;
  }
}
