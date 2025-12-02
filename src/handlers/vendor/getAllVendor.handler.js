const getAllVendorHandler = async (body, query, params) => {

  const vendorData = await Vendor.findAndCountAll()
  return { success: true, vendorData }
}