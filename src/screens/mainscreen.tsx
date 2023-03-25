import { FC, memo, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Empty, renderItem } from "../components/flatlist";
import { Loader } from "../components/loader";
import styles from "../components/styles";
import { useGetbeersQuery } from "../store/apislice";

const MainScreen: FC = () => {
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, refetch } = useGetbeersQuery(
    { page, per_page: 5 },
    { refetchOnMountOrArgChange: true, refetchOnFocus: true }
  );

  useEffect(() => {
    if (!isFetching) setLoading(false);
  }, [isFetching]);

  const getLatestData = () => {
    setLoading(true);
    if (page == 1) refetch();
    else setPage(1);
  };

  const changeScroll = () => {
    setScroll(true);
  };
  return (
    <FlatList
      refreshing={loading}
      onRefresh={getLatestData}
      onScrollBeginDrag={changeScroll}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={isFetching ? <Loader /> : <Empty />}
    />
  );
};

export default memo(MainScreen);
