export async function GET() {
  return new Response(
    JSON.stringify({ nextjs: "route.ts 잘 작동하고 있는지 테스트" }),
    {
      status: 200,
    }
  );
}

// export async function GET(request: Request) {}

// export async function HEAD(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
