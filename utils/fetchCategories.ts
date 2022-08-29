export const fetchCategories = async () => {
    const resp = await fetch (
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
    );

    const data = await resp.json();
    console.log(data);
};