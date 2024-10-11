import { useState, useEffect } from "react";
import getPhotos from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import { Image, ModalParams, SearchResults } from "../types";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [modalParams, setModalParams] = useState<ModalParams>({
    isOpen: false,
    url: "",
    alt: "",
  });

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const { results, totalPages }: SearchResults = await getPhotos(
          searchQuery,
          page
        );
        if (results.length === 0) {
          setError("There are no images matching your query");
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setShowLoadMore(totalPages > 1 && page !== totalPages);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error!");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchQuery, page]);

  function handleSearch(searchString: string) {
    setSearchQuery(searchString);
    setPage(1);
    setImages([]);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  function openModal(image: Image) {
    setModalParams({
      isOpen: true,
      url: image.urls.regular,
      alt: image.alt_description,
    });
  }

  function closeModal() {
    setModalParams({ isOpen: false, url: "", alt: "" });
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal}></ImageGallery>
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && showLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalParams.isOpen && (
        <ImageModal modalParams={modalParams} onClose={closeModal} />
      )}
    </div>
  );
}
