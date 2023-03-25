import { FC, memo } from "react";
import { FlatList } from "react-native";
import { Empty, renderItem } from "../components/flatlist";
import { Loader } from "../components/loader";
import styles from "../components/styles";
import { useGetbeersQuery } from "../store/apislice";

const MainScreen: FC = () => {
  const { data, isLoading, isFetching, refetch } = useGetbeersQuery(
    { page: 1, per_page: 5 },
    { refetchOnMountOrArgChange: true, refetchOnFocus: true }
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={isFetching ? <Loader /> : <Empty />}
    />
  );
};

export default memo(MainScreen);
