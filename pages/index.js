import Layout from "@/components/Layout";
import Grid from "@/components/Grid";
// Import the generated Prisma client
import { PrismaClient } from "@prisma/client";
// Instantiate it
const prisma = new PrismaClient();

export async function getServerSideProps() {
  // Get all homes
  const homes = await prisma.home.findMany();
  return {
    props: {
      // props for the Home component
      homes: JSON.parse(JSON.stringify(homes)),
    },
  };
}

export default function Home({ homes = [] }) {
  return (
    <Layout>
      <h1 className="text-xl font-medium text-gray-800">
        Top-rated places to stay
      </h1>
      <p className="text-gray-500">
        Explore some of the best places in the world
      </p>
      <div className="mt-8">
        <Grid homes={homes} />
      </div>
    </Layout>
  );
}
