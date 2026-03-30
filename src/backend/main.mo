import List "mo:core/List";

actor {
  type Chapter = {
    title : Text;
    content : Text;
  };

  let chapters = List.empty<Chapter>();

  public func addChapter(title : Text, content : Text) : async () {
    let chapter : Chapter = {
      title;
      content;
    };
    chapters.add(chapter);
  };

  public query func getAllChapters() : async [Chapter] {
    chapters.toArray();
  };
};
