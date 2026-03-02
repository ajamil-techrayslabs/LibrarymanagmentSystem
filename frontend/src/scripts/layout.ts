export async function loadComponent(
  containerId: string,
  filePath: string
): Promise<void> {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }

    const htmlContent = await response.text();

    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = htmlContent;
    }
  } catch (error) {
    console.error("Error loading component:", error);
  }
}
