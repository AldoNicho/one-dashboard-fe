"use client";
import { useUpdateBarangHooks } from "@/hooks/pageHooks/useUpdateBarang";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader2 from "@/components/common/Loader2";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";

const UpdateBarang = () => {
  const {
    id,
    name,
    code,
    image,
    price,
    loading,
    category,
    quantity,
    categories,
    description,
    isModalOpen,
    modalMessage,
    categoryLabel,
    originalPrice,
    setName,
    setCode,
    setImage,
    setPrice,
    showModal,
    hideModal,
    setQuantity,
    setCategory,
    setDescription,
    handleSetPrice,
    setModalMessage,
    handleSetQuantity,
    handleUpdateProduct,
    handleSetOriginalPrice,
  } = useUpdateBarangHooks();

  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <>
          <Breadcrumb pageName="Update Barang" />

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-9">
              {/* <!-- Input Fields --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Tambah Barang
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nama Barang
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Barang"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <SelectGroupOne
                    title="Kategori"
                    onChange={setCategory}
                    data={categories}
                    defaultValue={category || ""}
                  />

                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Kode Barang
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Kode Barang"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-row gap-4">
                    <div className="flex-1">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Harga Jual
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan Harga Jual"
                        value={price}
                        onChange={(e) => handleSetPrice(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Kuantitas
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan Kuantitas Barang"
                        value={quantity}
                        onChange={(e) => handleSetQuantity(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Harga Kulak
                    </label>
                    <input
                      type="text"
                      value={originalPrice || ""}
                      placeholder="Masukkan Harga Kulak"
                      onChange={(e) => handleSetOriginalPrice(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      style={{
                        appearance: "textfield", // For Edge
                        MozAppearance: "textfield", // For Firefox
                        WebkitAppearance: "none", // For Chrome, Safari, etc.
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Deskripsi
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Masukkan Deskripsi Barang"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button
                    className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                    onClick={() => handleUpdateProduct(id)}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-9">
              {/* <!-- File upload --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Foto Barang
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Lampirkan Foto
                    </label>
                    <input
                      type="file"
                      className="absolute w-full rounded-md border border-stroke p-3 opacity-0 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                      accept="image/*"
                      onChange={(e: any) => {
                        const file = e.target.files[0];
                        setImage(file);
                      }}
                    />
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="rounded-md border border-stroke p-3 transition focus:border-primary"
                      >
                        Pilih File
                      </button>
                      <span className="ml-4 file:text-sm">{image?.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isModalOpen && (
              <ConfirmationModal message={modalMessage} onConfirm={hideModal} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UpdateBarang;
