import {Box} from "@material-ui/core";

function EmptyCell() {
    return <Box height={100} bgcolor="white" width={110} display="inline-block" border={1}>
    </Box>;
}

export const NonEmptyCell = () => <Box height={100} bgcolor="red" width={110} display="inline-block" border={1}>
</Box>;

export const RatCell = () => <Box height={100} bgcolor="white" width={110} display="inline-block" border={1}>
    <img src="https://purepng.com/public/uploads/large/purepng.com-jerry-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659491ynpug.png" height={100}  alt="No"/>
</Box>;

export const CheeseCell = () => <Box height={100} bgcolor="white" width={110} display="inline-block" border={1}>
    <img src="https://www.ecosystemmarketplace.com/wp-content/uploads/2019/11/Swiss-Cheese.jpg" height={90}  alt="No"/>
</Box>;


export default EmptyCell;