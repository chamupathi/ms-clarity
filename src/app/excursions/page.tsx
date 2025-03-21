export default async function Excursions({
  searchParams,
}: {
  searchParams: Promise<{ firstSelect: string; secondSelect: string; thirdSelect: string }>;
}) {

    const { firstSelect, secondSelect, thirdSelect } = await searchParams;
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Excursions</h1>
      
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Selected Options:</h2>
        <ul className="space-y-2">
          <li>First Selection: {firstSelect}</li>
          <li>Second Selection: {secondSelect}</li>
          <li>Third Selection: {thirdSelect}</li>
        </ul>
      </div>
    </div>
  );
}