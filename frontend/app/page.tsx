import QueryComponent from "@/component/QueryComponent";
import ImageSearchComponent from "@/component/ImageSearchComponent";
import DrawJewelryComponent from "@/component/DrawJewelryComponent";
import FilterSidebar from "@/component/FilterComponent";
import AddJewelryMetadata from "@/component/AddJewelryMetadata";


export default function Home() {
  return (
    <>
    <QueryComponent/>
    <ImageSearchComponent/>
    <DrawJewelryComponent/>
    <FilterSidebar/>
    <AddJewelryMetadata/>
    </>
  );
}
