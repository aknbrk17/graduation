import { exportToPdf } from "@/lib/utils";
import { Button } from "../ui/button";
import { createDesign } from "../../app/api/api"; // API function import
import { fabric } from "fabric"; // Import fabric.js
import { v4 as uuid4 } from "uuid";

const Export = () => {
  const handleExport = async () => {
    const canvasElement = document.querySelector("canvas");
    if (!canvasElement) return;

    // Fabric.js to get canvas data
    const fabricCanvas = new fabric.Canvas(canvasElement);
    const canvasData = fabricCanvas.toJSON() as {
      version: string;
      objects: any[];
    };

    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    const parsedUserId = parseInt(userId, 10);
    console.log("Parsed User ID:", parsedUserId);
    if (isNaN(parsedUserId)) {
      console.error("Invalid User ID");
      return;
    }

    const objects = canvasData.objects.map((obj) => ({
      ...obj,
      objectId: obj.objectId || uuid4(), // Ensure we have the objectId
    }));

    const data = {
      userId: parsedUserId, // Kullanıcı ID'si integer olarak kullanılıyor
      data: {
        canvasObjects: {
          data: objects.reduce((acc, obj) => {
            acc[obj.objectId] = obj;
            return acc;
          }, {} as Record<string, any>),
        },
      },
    };

    // Log the data being sent to the server
    console.log("Sending design data:", data);

    // CreateDesign API call
    try {
      const response = await createDesign(data);
      console.log("Design created:", response);
      alert("Design successfully sent to server!");
    } catch (error) {
      console.error(
        "Error creating design:",
        error.response?.data || error.message
      );
      alert("Failed to send design to server.");
    }
  };

  return (
    <div className="flex flex-col gap-3 px-5 py-3">
      <h3 className="text-[10px] uppercase">Export</h3>
      <Button
        variant="outline"
        className="w-full border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black"
        onClick={exportToPdf}
      >
        Export to PDF
      </Button>
      <Button
        variant="outline"
        className="w-full border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black"
        onClick={handleExport}
      >
        Export to Server
      </Button>
    </div>
  );
};

export default Export;
