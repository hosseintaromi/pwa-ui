export default interface NotificationModel {
  id: number;
  content: ContentModel;
  title: TitleModel;
  icon: string;
  isUnread: boolean;
  routeParameters: string;
  routeTarget: string;
  routeType: string;
  time: string;
  titleImage: string;
}

export interface ContentModel {
  text: string;
}

export interface TitleModel {
  text: string;
}
