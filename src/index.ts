const core = {
  formData: {
    get(formData: FormData): Record<string, FormDataEntryValue> {
      const extractedData: Record<string, FormDataEntryValue> = {}

      for (const [key, value] of formData.entries()) {
        extractedData[key] = value
      }

      return extractedData
    },
    set(formData: FormData, data: Record<string, any>): FormData {
      for (const key in data) {
        formData.set(key, data[key])
      }

      return formData
    }
  }
}

export default core
