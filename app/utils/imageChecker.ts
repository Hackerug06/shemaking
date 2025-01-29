export async function checkImageExists(src: string): Promise<boolean> {
  try {
    const response = await fetch(src, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error("Error checking image:", error)
    return false
  }
}

      
