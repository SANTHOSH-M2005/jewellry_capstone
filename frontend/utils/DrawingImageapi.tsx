const sendDrawFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append("file", file);   // key must match Flask endpoint
        
        const res=await fetch("https://af61-34-187-174-2.ngrok-free.app/drawingSearch",{
            method: "POST",
            body: formData
        });
        const data = await res.json();
        console.log("Response from backend:", data);
        return data;
    }
    catch (error) {
        console.error("Error uploading file:", error);
    }};

export { sendDrawFile };