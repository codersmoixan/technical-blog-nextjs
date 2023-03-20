import routes from "@/src/routes";

function CreatorPage() {}

export default CreatorPage

export async function getServerSideProps() {
  return {
    redirect: {
      destination: routes.creatorHome,
      permanent: false
    }
  }
}
