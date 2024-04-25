import LoadingUI from "@common/components/ui/loading/LoadingUI";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";

export default function Loading() {
  return (
    <UseDeferredComponent>
      <LoadingUI />
    </UseDeferredComponent>
  );
}
