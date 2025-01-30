export async function checkImageExists(src: string): Promise<boolean> {
  if (typeof window === "undefined") {
    // Server-side: we can't check directly, so we assume it exists
    return true
  }

  // Client-side: we can check if the image loads
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

                                       
