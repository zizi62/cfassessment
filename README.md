# Getting Started

1. Clone this repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000] 

http://localhost:3000/ -starter template
http://localhost:3000/rates -rates information
http://localhost:3000/rates/id - information about crypto currency + price history

# Project Structure

- `app/page.tsx` - Landing page with challenge instructions
- `app/rates/page.tsx` - The rates list view here
- `app/rates/[id]/page.tsx` - The crypto currency detail view here
- `lib/api.ts` - API utilities 
- `components/` - Application Components
- `utils/` - Helpers functions + constants

# What was used:

React 19
Next.js 15
Tailwind CSS
WebSocket for crypto currency page (first time use)
cryptocurrency-icons (Unfortunately, many icons are missing. A CriptoIcon (client component) with fallback was created.
but it had a bad effect on the UI overall)